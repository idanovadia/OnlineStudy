package com.onlinestudy.summary.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.onlinestudy.summary.api.API;
import com.onlinestudy.summary.model.Book;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;


@Service
public class MyService {

    @Autowired
    API api;

    final String BaseUri = "http://localhost:7175";
    private final ObjectMapper objectMapper = new ObjectMapper();


    public Book getBook() throws Exception{
        int id = 123;
        String saveBookUrl = BaseUri + "/book/" + id;

        MultiValueMap<String,String> headers = new HttpHeaders();
        headers.add("owner","Maor");

        MultiValueMap<String,String> queryParam = new HttpHeaders();
        queryParam.add("cost","150");

        JsonNode jsonNode = api.get(saveBookUrl,headers,queryParam);
        return new ObjectMapper().treeToValue(jsonNode,Book.class);

    }

//    public String myMessage() {
//        try {
//            RestTemplate restTemplate = new RestTemplate();
//            return restTemplate.getForObject(BaseUri + "/message", String.class);
//        }catch (Exception e){
//            System.out.println(e.getMessage());
//        }
//        return null;
//    }

    public void saveBook() throws Exception{
        int id = 123;
        String saveBookUrl = BaseUri + "/book/" + id;

        MultiValueMap<String,String> headers = new HttpHeaders();
        headers.add("owner","Maor");

        MultiValueMap<String,String> queryParam = new HttpHeaders();
        queryParam.add("cost","150");

        JSONObject body = new JSONObject();
        body.put("title", "ghost");
        body.put("author", "Dan");

        api.post(saveBookUrl,headers,queryParam,body);

    }

//    public void saveBook(){
//        int id = 123;
//        String saveBookUrl = BaseUri + "/book/" + id;
//
//        RestTemplate restTemplate = new RestTemplate();
//
//        HttpHeaders headers = new HttpHeaders();
//        headers.setContentType(MediaType.APPLICATION_JSON);
//        headers.add("owner","Maor");
//
//        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl(saveBookUrl)
//                .queryParam("cost", 150);
//
//        JSONObject personJsonObject2 = new JSONObject();
//        personJsonObject2.put("title", "ghost");
//        personJsonObject2.put("author", "Dan");
//
//        HttpEntity<String> request = new HttpEntity<String>(personJsonObject2.toString(), headers);
//
//        String personResultAsJsonStr = restTemplate.postForObject(builder.toUriString(), request, String.class);
//        try {
//            JsonNode root = objectMapper.readTree(personResultAsJsonStr);
//        } catch (JsonProcessingException e) {
//            e.printStackTrace();
//        }
//    }
}
