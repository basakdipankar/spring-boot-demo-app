FROM openjdk:8-jdk-alpine
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} springbootapp.jar
ENTRYPOINT ["java","-jar","/springbootapp.jar"]