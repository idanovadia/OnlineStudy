package com.onlinestudy.summary.configuration.rabbitMQ;

import org.springframework.boot.context.properties.ConstructorBinding;

import java.util.List;

@ConstructorBinding
public record PublishQueueConfig(
        String exchange,
        List<BindingQueue> bindingQueue
        ){}