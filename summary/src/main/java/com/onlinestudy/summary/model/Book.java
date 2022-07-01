package com.onlinestudy.summary.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Book implements Serializable {
    private String id;
    private String owner;
    private String title;
    private String author;
    private int cost;

}
