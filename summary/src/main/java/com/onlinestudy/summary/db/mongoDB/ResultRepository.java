package com.onlinestudy.summary.db.mongoDB;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResultRepository extends MongoRepository<UserExerciseResult, Integer> {

}
