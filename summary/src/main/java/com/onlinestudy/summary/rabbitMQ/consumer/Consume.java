package com.onlinestudy.summary.rabbitMQ.consumer;

import com.onlinestudy.summary.rabbitMQ.ConnectionManager;
import com.onlinestudy.summary.rabbitMQ.dto.Message;
import com.rabbitmq.client.Channel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

@Service
public class Consume implements IConsume {

    @Autowired
    ConnectionManager connectionManager;

    @Override
    public void publishMessage(Message message) throws IOException, TimeoutException {
        Channel channel = connectionManager.getConnection().createChannel();
        channel.basicPublish(message.getExchange(), message.getRoutingKey(),
                null, message.getContent().getBytes());
        channel.close();
    }
}
