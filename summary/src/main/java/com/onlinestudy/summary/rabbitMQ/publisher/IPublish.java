package com.onlinestudy.summary.rabbitMQ.publisher;

import java.io.IOException;
import java.util.concurrent.TimeoutException;

public interface IPublish {

    void subscribeMessage() throws IOException, TimeoutException;
}
