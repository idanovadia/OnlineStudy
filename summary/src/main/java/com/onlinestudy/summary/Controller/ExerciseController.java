package com.onlinestudy.summary.Controller;

import com.onlinestudy.summary.Service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.UUID;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping("/exercise")
public class ExerciseController {

    @Autowired
    private ExerciseService exerciseService;

    @ResponseBody
    @RequestMapping(value = "/{type}", produces = "application/json; charset=UTF-8", method = GET)
    public ResponseEntity<?> getExerciseByID(@PathVariable UUID id, @PathVariable String type) {
        try {
            return new ResponseEntity<>(this.exerciseService.getExerciseByID(id, type), HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("An error has occurred", HttpStatus.BAD_REQUEST);
        }
    }
}
