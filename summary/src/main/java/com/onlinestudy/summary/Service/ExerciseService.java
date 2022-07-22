package com.onlinestudy.summary.Service;

import com.onlinestudy.summary.db.mongoDB.ResultRepository;
import com.onlinestudy.summary.db.mongoDB.UserExerciseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ExerciseService {

    @Autowired
    private ResultRepository resultRepository;

    public UserExerciseResult getExerciseByID(UUID id, String type) {
        UUID userID = UUID.randomUUID();
        return resultRepository.getExerciseByID(userID);
    }
}
