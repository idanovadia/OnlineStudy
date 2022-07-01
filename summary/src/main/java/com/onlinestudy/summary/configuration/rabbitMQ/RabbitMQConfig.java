package com.onlinestudy.summary.configuration.rabbitMQ;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.context.properties.ConstructorBinding;

import java.util.List;

@ConfigurationProperties(prefix = "rabbitmq")
@ConstructorBinding
public record RabbitMQConfig (
        String connectionURL,
        List<PublishQueueConfig> publishQueues
){}



