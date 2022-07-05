package com.onlinestudy.summary.db.mongoDB;

import com.onlinestudy.summary.rabbitMQ.dto.Exercise;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;
import java.util.UUID;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "UserExerciseResult")
public class UserExerciseResult {

    @Id
    private int id;
    private double grade;
    private String type;
    private UUID assignment_id;
    private List<Exercise> userAnswers;
    private UUID userID;
    private Date delivered;
}
