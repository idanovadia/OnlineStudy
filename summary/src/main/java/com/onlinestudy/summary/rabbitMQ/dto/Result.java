package com.onlinestudy.summary.rabbitMQ.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Result {

    private String type;
    private UUID assignment_id;
    private List<Exercise> userAnswers;
    private UUID userID;
    private Date delivered;
}
