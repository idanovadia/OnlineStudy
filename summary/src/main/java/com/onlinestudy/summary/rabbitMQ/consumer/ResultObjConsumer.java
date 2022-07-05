package com.onlinestudy.summary.rabbitMQ.consumer;


import com.onlinestudy.summary.rabbitMQ.config.MessagingConfig;
import com.onlinestudy.summary.rabbitMQ.dto.Result;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
public class ResultObjConsumer {


    @RabbitListener(queues = MessagingConfig.QUEUE)
    public void consumeMessageFromQueue(Result result) {
        System.out.printf(result.toString());
    }
}
