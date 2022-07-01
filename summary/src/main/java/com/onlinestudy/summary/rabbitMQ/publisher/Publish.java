package com.onlinestudy.summary.rabbitMQ.publisher;

import com.onlinestudy.summary.configuration.rabbitMQ.RabbitMQConfig;
import com.onlinestudy.summary.rabbitMQ.ConnectionManager;
import com.rabbitmq.client.Channel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

@Component
public class Publish implements IPublish {

    @Autowired
    ConnectionManager connectionManager;

    @Autowired
    RabbitMQConfig rabbitMQConfig;

    @Override
    @Bean
    public void subscribeMessage() throws IOException, TimeoutException {
        Channel channel = connectionManager.getConnection().createChannel();
        rabbitMQConfig.publishQueues().forEach(publishQueue -> publishQueue.bindingQueue().forEach(bindingQueue -> {
            try {
                channel.basicConsume(bindingQueue.queue(), true, ((consumerTag, message) -> {
                    System.out.println("\n\n=========== Health Queue ==========");
                    System.out.println(consumerTag);
                    System.out.println("HealthQ: " + new String(message.getBody()));
                    System.out.println(message.getEnvelope());
                }), consumerTag -> {
                    System.out.println(consumerTag);
                });
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }));

        channel.close();
    }
}
