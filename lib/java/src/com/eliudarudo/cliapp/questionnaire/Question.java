package com.eliudarudo.cliapp.questionnaire;

import java.util.ArrayList;

public class Question {
    String statement;
    Choice[] choices;
    String answer;
    String tag;

    public Question(String statement, Choice[] choices, String answer, String tag) {
        this.statement = statement;
        this.choices = choices;
        this.answer = answer;
        this.tag = tag;
    }
}
