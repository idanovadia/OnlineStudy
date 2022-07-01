package com.onlinestudy.summary.api;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.json.JSONObject;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;


@Service
public class API {

    private HttpHeaders addHeaders(MultiValueMap<String, String> headersMap) {
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.addAll(headersMap);
        return headers;
    }

    public JsonNode get(
            String url,
            MultiValueMap<String, String> headersMap,
            MultiValueMap<String, String> queryParamMap
    ) throws Exception {
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = addHeaders(headersMap);
        UriComponentsBuilder builder = UriComponentsBuilder
                .fromHttpUrl(url)
                .queryParams(queryParamMap);

        HttpEntity<String> request = new HttpEntity<>(headers);
        ResponseEntity<JsonNode> response = restTemplate.exchange(
                builder.toUriString(), HttpMethod.GET, request, JsonNode.class);
        return response.getBody();
    }

    public JsonNode post(
            String url,
            MultiValueMap<String, String> headersMap,
            MultiValueMap<String, String> queryParamMap,
            JSONObject body)
            throws Exception {

        ObjectMapper objectMapper = new ObjectMapper();
        RestTemplate restTemplate = new RestTemplate();
        HttpHeaders headers = addHeaders(headersMap);
        UriComponentsBuilder builder = UriComponentsBuilder
                .fromHttpUrl(url)
                .queryParams(queryParamMap);

        HttpEntity<String> request = new HttpEntity<>(body.toString(), headers);
        String personResultAsJsonStr = restTemplate.postForObject(builder.toUriString(), request, String.class);
        return objectMapper.readTree(personResultAsJsonStr);
    }
}
