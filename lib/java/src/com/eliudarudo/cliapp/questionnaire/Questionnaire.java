package com.eliudarudo.cliapp.questionnaire;

import jdk.jshell.execution.Util;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;


class QuestionnaireController {
    private ArrayList<Question> questions;
    private ArrayList<Question> correctQuestions;

    public QuestionnaireController(ArrayList<Question> questions) {
        this.questions = questions;
        this.correctQuestions = new ArrayList<>();
    }

    /* --------------------------------------------------------- */
    private String fetchUserEvaluation(String defaultMessage) {
        return Utility.fetchUserEvaluation(defaultMessage, this.correctQuestions);
    }
    /* --------------------------------------------------------- */

    public void initialize() {
        System.out.println(
                "===== DEVELOPER TRIVIA ================================================");
        System.out.println("Hi there! We have some questions for you: ");
        System.out.println("Please answer them without looking.");
        System.out.println("In case you don't know the answer, it's okay to choose option (D)");
        System.out.println("=======================================================================");
    }

    private void debugQuestion(Question question) {
        System.out.println("......... " + question.tag + " ..... (" +
                question.answer + ") ....................");

        HashMap<String, Integer> developerRating = new HashMap<>();
        developerRating.put("frontend", 0);
        developerRating.put("backend", 0);
        developerRating.put("devops", 0);
        developerRating.put("mobile", 0);

        for(Question _question:this.correctQuestions) {
            String tag = _question.tag;
            developerRating.replace(tag, developerRating.get(tag) + 1);
        }

        for (String key:developerRating.keySet()) {
            System.out.println(key + " : " + developerRating.get(key));
        }

        System.out.println("......................................................");
    }

    public void printQuestion(int index, Question question) {
        System.out.println(index + ". " + question.statement);
        System.out.println("");
        for(Choice choice:question.choices) {
            System.out.println(choice.letter + ") " + choice.statement);
        }

        // Debug
        // this.debugQuestion(question);
    }

    public Question fetchQuestionAtIndex(int index) {
        return this.questions.get(index);
    }

    public Question popAQuestion() {
        if(this.questions == null) {
            return null;
        }

        try {
            Question question = this.questions.get(this.questions.size() - 1);
            this.questions.remove(this.questions.size() - 1);
            return question;
        } catch(Exception e) {
            return null;
        }
    }

    public void evaluateQuestion(Question question, String answer) {
        if(question.answer.equals(answer)) {
            this.correctQuestions.add(question);
        }
    }

    public void evaluateUser() {
        String defaultMessage = "You're a great developer, keep pushing!";

        String message = this.fetchUserEvaluation(defaultMessage);
        System.out.println(message);
    }
}

public class Questionnaire {

    private static ArrayList<Question> prepareQuestions() {
       /*
         Move Questions to mutable array
       */
        ArrayList<Question> frontendQuestionCopy = new ArrayList<>();
        Collections.addAll(frontendQuestionCopy, Questions.fetchFrontendQuestions());
        ArrayList<Question> backendQuestionCopy = new ArrayList<>();
        Collections.addAll(backendQuestionCopy, Questions.fetchBackendQuestions());
        ArrayList<Question> devopsQuestionCopy = new ArrayList<>();
        Collections.addAll(devopsQuestionCopy, Questions.fetchDevopsQuestions());
        ArrayList<Question> mobileQuestionCopy = new ArrayList<>();
        Collections.addAll(mobileQuestionCopy, Questions.fetchMobileQuestions());

        ArrayList<ArrayList<Question>> initArray = new ArrayList<>();
        initArray.add(frontendQuestionCopy);
        initArray.add(backendQuestionCopy);
        initArray.add(devopsQuestionCopy);
        initArray.add(mobileQuestionCopy);

        ArrayList<Question> questions = new ArrayList<>();

        Utility.RandomGenerator random = new Utility.RandomGenerator();

        while (initArray.size() != 0) {
            int randomIndex = random.randint(0, initArray.size() - 1);

            if (initArray.get(randomIndex).size() == 0) {
                initArray.remove(randomIndex);
            } else {
                Question question = initArray.get(randomIndex).get(initArray.get(randomIndex).size() - 1);
                initArray.get(randomIndex).remove(initArray.get(randomIndex).size() - 1);
                questions.add(question);
            }
        }

        return questions;
    }

    public static void display() {
        ArrayList<Question> questions = prepareQuestions();
        QuestionnaireController questionnaire = new QuestionnaireController(questions);

        questionnaire.initialize();

        int index = 1;

        while (true) {
            System.out.println("");
            Question question = questionnaire.popAQuestion();

            if (question != null) {
                questionnaire.printQuestion(index, question);
                String answer = InputMod.getSelection();

                if (answer.equals("A") || answer.equals("B") || answer.equals("C") || answer.equals("D")) {
                    questionnaire.evaluateQuestion(question, answer);
                } else if (answer.equals("Q")) {
                    break;
                } else {
                    System.out.println("\nYour choice was invalid, please try again");
                    continue;
                }
            } else {
                break;
            }

            index += 1;
        }

        questionnaire.evaluateUser();
    }
}