package com.eliudarudo.cliapp;

public class Option {
    private int index;
    private String title;

    public Option(int index, String title) {
        this.index = index;
        this.title = title;
    }

    public void print() {
        System.out.println(this.index + ". " + this.title);
    }
}
