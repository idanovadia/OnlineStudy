package com.onlinestudy.summary;

public class MyError extends Exception {

    Message massage;

    public MyError(Message massage) {
        this.massage = massage;
    }

    public MyError(String message, Message massage) {
        super(message);
        this.massage = massage;
    }

    public MyError(String message, Throwable cause, Message massage) {
        super(message, cause);
        this.massage = massage;
    }

    public MyError(Throwable cause, Message massage) {
        super(cause);
        this.massage = massage;
    }

    public MyError(String message, Throwable cause, boolean enableSuppression, boolean writableStackTrace, Message massage) {
        super(message, cause, enableSuppression, writableStackTrace);
        this.massage = massage;
    }
}
