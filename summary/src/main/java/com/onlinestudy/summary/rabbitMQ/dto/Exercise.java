package com.onlinestudy.summary.rabbitMQ.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Exercise {

    private String question;
    private String answer;
    private String user_answer;
}
