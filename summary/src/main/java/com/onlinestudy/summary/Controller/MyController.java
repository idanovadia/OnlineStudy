package com.onlinestudy.summary.Controller;

import com.onlinestudy.summary.Service.MyService;
import com.onlinestudy.summary.rabbitMQ.ConnectionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.HttpStatusCodeException;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

@RestController
@RequestMapping("/")
public class MyController {


    private MyService myService;
    @Autowired
    public void setMyService(MyService myService) {
        this.myService = myService;
    }

    @Autowired
    ConnectionManager connectionManager;

    @RequestMapping(value = "/book",produces = "application/json; charset=UTF-8", method = GET)
    @ResponseBody
    public ResponseEntity<?> getMyServiceMessage() {
        try {
            connectionManager.getConnection();
            return new ResponseEntity<>(this.myService.getBook(), HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>("An error has occurred",HttpStatus.BAD_REQUEST);
        }
    }

    @RequestMapping(value = "/saveBook",produces = "application/json; charset=UTF-8", method = GET)
    @ResponseBody
    public ResponseEntity<?> saveBook() {
        try {
            this.myService.saveBook();
            return new ResponseEntity<>("The book was saved", HttpStatus.OK);
        }catch(HttpStatusCodeException e) {
                return ResponseEntity.status(e.getRawStatusCode()).headers(e.getResponseHeaders())
                        .body(e.getResponseBodyAsString());
        }catch (Exception e){
            return new ResponseEntity<>("An error has occurred",HttpStatus.BAD_REQUEST);
        }
    }
}
