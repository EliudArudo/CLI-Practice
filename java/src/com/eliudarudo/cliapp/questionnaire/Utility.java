package com.eliudarudo.cliapp.questionnaire;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Random;

public class Utility {

    public static class RandomGenerator {
        public RandomGenerator() {}

        public int randint(int min, int max) {
            Random random = new Random();
            return min + random.nextInt(max - min + 1);
        }
    }

    public static boolean stringIsValid(String string) {
        try {
            return string.length() != 0;
        } catch(Exception e) {
            return false;
        }
    }

    public static void printFieldErrorMessage() {
        System.out.println("Please try again, invalid input");
    }

    public static String fetchUserEvaluation(String defaultMessage, ArrayList<Question> correctQuestions) {
        if(correctQuestions == null) {
            return defaultMessage;
        }
        StringBuilder message = new StringBuilder();

        String frontend = "frontend";
        String backend = "backend";
        String devops = "devops";
        String mobile = "mobile";

        HashMap<String, Integer> developerRating = new HashMap();
        developerRating.put(frontend, 0);
        developerRating.put(backend, 0);
        developerRating.put(devops, 0);
        developerRating.put(mobile, 0);

        for(Question question: correctQuestions) {
            String tag = question.tag;
            developerRating.replace(tag, developerRating.get(tag) + 1);
        }

        int passingLimit = 3;
        int failureLimit = 2;

        boolean isFrontendDeveloper = developerRating.get(frontend) > failureLimit && developerRating.get(
                backend) <= failureLimit && developerRating.get(devops) <= failureLimit && developerRating.get(mobile) <= failureLimit;

        boolean isBackendDeveloper = developerRating.get(frontend) <= failureLimit && developerRating.get(
                backend) > failureLimit && developerRating.get(devops) <= failureLimit && developerRating.get(mobile) <= failureLimit;

        boolean isDevopsEngineer = developerRating.get(frontend) < failureLimit && developerRating.get(
                backend) < failureLimit && developerRating.get(devops) > failureLimit && developerRating.get(mobile) < failureLimit;

        boolean isMobileDeveloper = developerRating.get(frontend) < failureLimit && developerRating.get(
                backend) < failureLimit && developerRating.get(devops) < failureLimit && developerRating.get(mobile) > failureLimit;

        boolean isFullStackDeveloper = developerRating.get(frontend) > failureLimit && developerRating.get(
                backend) > failureLimit && developerRating.get(devops) < failureLimit;

        boolean isSoftwareEngineer = developerRating.get(frontend) > failureLimit && developerRating.get(
                backend) > failureLimit && developerRating.get(devops) >= failureLimit;

        boolean isAllRounder = developerRating.get(frontend) >= failureLimit && developerRating.get(
                backend) >= failureLimit && developerRating.get(devops) >= failureLimit && developerRating.get(mobile) >= failureLimit;
                
        // System.out.println("frontend developer: " + isFrontendDeveloper);
        // System.out.println("backend developer: " + isBackendDeveloper);
        // System.out.println("devops developer: " + isDevopsEngineer);
        // System.out.println("mobile developer: " + isMobileDeveloper);
        // System.out.println("fullstack developer: " + isFullStackDeveloper);
        // System.out.println("software engineer: " + isSoftwareEngineer);
        // System.out.println("all rounder: " + isAllRounder);

        if (isAllRounder) {
            message.append("WOW! Looks like we got an all rounder, congratulations!!!");
        }
        else if (isSoftwareEngineer) {
            message.append("You're definitely a Software engineer :-)");
        }
        else if (isFullStackDeveloper) {
            message.append("Congratulations, Oh Fullstack developer!");
        }
        else if (isDevopsEngineer) {
            message.append("You're definitely a DevOps engineer");
        }
        else if (isMobileDeveloper) {
            message.append("Looks like you are a mobile developer!");
        }
        else if (isBackendDeveloper) {
            message.append("Another great backend developer!");
        }
        else if (isFrontendDeveloper) {
            message.append("Looks like you are a frontend developer, right?");
        }
        else{
            message.append(defaultMessage);
        }

        message.append("\n");

        return message.toString();
    }
}
