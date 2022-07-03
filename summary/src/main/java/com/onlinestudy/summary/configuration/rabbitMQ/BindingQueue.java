package com.onlinestudy.summary.configuration.rabbitMQ;

import org.springframework.boot.context.properties.ConstructorBinding;

@ConstructorBinding
public record BindingQueue(
        String queue,
        String routingKey) { }
