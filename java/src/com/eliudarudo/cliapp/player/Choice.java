package com.eliudarudo.cliapp.player;

public class Choice {
    String letter;
    String statement;

    public Choice(String letter, String statement) {
       this.letter = letter;
       this.statement = statement;
    }

    public String fetchStatement() {
        return this.statement;
    }

    public String fetchLetter() {
        return this.letter;
    }
}
