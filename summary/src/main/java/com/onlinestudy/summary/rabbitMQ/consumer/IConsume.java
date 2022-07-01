package com.onlinestudy.summary.rabbitMQ.consumer;

import com.onlinestudy.summary.rabbitMQ.dto.Message;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public interface IConsume {

    void publishMessage(Message message) throws IOException, TimeoutException;
}
