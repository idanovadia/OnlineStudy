FROM openjdk:17-jdk-slim-buster

ADD target/summary.jar summary.jar

ENTRYPOINT ["java","-jar","/summary.jar"]