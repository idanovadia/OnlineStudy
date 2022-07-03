package com.onlinestudy.summary.rabbitMQ;

import com.onlinestudy.summary.configuration.rabbitMQ.RabbitMQConfig;
import com.rabbitmq.client.Connection;
import com.rabbitmq.client.ConnectionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

@Service
public class ConnectionManager {

    @Autowired
    RabbitMQConfig rabbitMQConfig;

    private Connection connection = null;

    /**
     * Create RabbitMQ Connection
     *
     * @return Connection
     */
    public Connection getConnection() {
        if (connection == null) {
            try {
                ConnectionFactory connectionFactory = new ConnectionFactory();
                connection = connectionFactory.newConnection(rabbitMQConfig.connectionURL());
            } catch (IOException | TimeoutException e) {
                e.printStackTrace();
            }
        }
        return connection;
    }
}
