package com.onlinestudy.summary.rabbitMQ.config;


import com.onlinestudy.summary.configuration.rabbitMQ.BindingQueue;
import com.onlinestudy.summary.configuration.rabbitMQ.RabbitMQConfig;
import com.onlinestudy.summary.rabbitMQ.ConnectionManager;
import com.rabbitmq.client.BuiltinExchangeType;
import com.rabbitmq.client.Channel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeoutException;

@Service
public class InitialRabbitMQ {

    Logger logger = LoggerFactory.getLogger(InitialRabbitMQ.class);

    @Autowired
    ConnectionManager connectionManager;

    @Autowired
    RabbitMQConfig rabbitMQConfig;

    private Channel channel;

    @Bean
    public void declare() throws IOException, TimeoutException {
        channel = connectionManager.getConnection().createChannel();
        try {
            declareExchange();
            declareBindings();
        } catch (IOException | TimeoutException e) {
            logger.error(e.getMessage());
            throw new RuntimeException(e);
        } finally {
            channel.close();
        }

    }

    private void declareQueues(List<BindingQueue> bindingQueues) throws IOException, TimeoutException {
        bindingQueues.forEach(bindingQueue -> {
            try {
                channel.queueDeclare(bindingQueue.queue(), true, false, false, null);
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        });
    }

    private void declareBindings() throws IOException, TimeoutException {
        //Create bindings - (queue, exchange, routingKey) - routingKey != null
        rabbitMQConfig.publishQueues().forEach(publishQueue -> publishQueue.bindingQueue().forEach(bindingQueue -> {
            try {
                channel.queueBind(bindingQueue.queue(), publishQueue.exchange(), bindingQueue.routingKey());
            } catch (IOException e) {
                throw new RuntimeException(e);
            }
        }));
    }

    private void declareExchange() throws IOException, TimeoutException {
        rabbitMQConfig.publishQueues().forEach(publishQueue -> {
            try {
                channel.exchangeDeclare(publishQueue.exchange(), BuiltinExchangeType.TOPIC, true);
                declareQueues(publishQueue.bindingQueue());
            } catch (IOException | TimeoutException e) {
                logger.error(e.getMessage());
                throw new RuntimeException(e);
            }
        });
    }
}
