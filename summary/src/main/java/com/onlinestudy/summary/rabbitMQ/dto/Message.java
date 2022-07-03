package com.onlinestudy.summary.rabbitMQ.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class Message {

    private String content;
    private String exchange;
    private String routingKey;
}