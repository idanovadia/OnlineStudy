package com.onlinestudy.summary.db.mongoDB;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface ResultRepository extends MongoRepository<UserExerciseResult, Integer> {
    @Query("{userID : ?0}")
    UserExerciseResult getExerciseByID(UUID userID);
}
