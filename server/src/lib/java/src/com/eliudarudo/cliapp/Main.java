package com.eliudarudo.cliapp;

import com.eliudarudo.cliapp.player.InputMod;
import com.eliudarudo.cliapp.player.Player;
import com.eliudarudo.cliapp.questionnaire.Questionnaire;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        displayMenu();
    }

    private static void printOptions() {
        System.out.println("MAIN MENU");
        System.out.println("===================================");
        System.out.println("Please select one of the following: ");

        ArrayList<Option> options = new ArrayList<>();
        options.add(new Option(1, "Music player"));
        options.add(new Option(2, "Developer trivia"));
        options.add(new Option(3, "Quit (or Q)"));

        for(Option option:options) {
            option.print();
        }
        System.out.println("");
    }

    private static void displayMenu() {
        while(true) {
            printOptions();

            String selection = InputMod.getSelectionWithPrompt("Selection: ");
            System.out.println("");

            if(selection.equals("1")) {
                Player.display();
            } else if (selection.equals("2")) {
                Questionnaire.display();
            } else if (selection.equals("3") || selection.equals("Q")) {
                System.out.println("Thanks for playing our games!");
                break;
            } else {
                System.out.println("Didn't catch that, please select \n");
            }
        }
    }
}
