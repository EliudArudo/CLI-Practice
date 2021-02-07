package com.eliudarudo.cliapp.player;

import java.util.Scanner;

public class InputMod {
    public InputMod() {}

    public static String getSelectionWithPrompt(String prompt) {
        Scanner scanner = new Scanner(System.in);
        System.out.print(prompt);

        try {
            String selection = scanner.nextLine().toUpperCase();
            return selection;
        } catch(Exception e) {
            return "";
        }
    }

    public static String getSelection() {
        System.out.println("==================================================");
        String selection = getSelectionWithPrompt("Enter a selection (Q to quit): ");
        return selection;
    }

    public static Song getSong() {
        String title = "";
        String artist = "";
        String ratingString = "";
        int rating = 0;

        while(true) {
            title = getSelectionWithPrompt("Enter song name: ").trim();
            if(Utility.stringIsValid(title)) {
                break;
            }
        }

        while(true) {
            artist = getSelectionWithPrompt("Enter song artist: ").trim();
            if(Utility.stringIsValid(artist)) {
                break;
            }
        }

        while(true) {
            try {
                ratingString = getSelectionWithPrompt("Enter your rating: ").trim();

                if(Utility.stringIsValid(ratingString)) {
                    rating = Integer.parseInt(ratingString);
                    break;
                } else {
                    throw new Exception("");
                }

            } catch(Exception e) {
                System.out.println("Please enter a number");
            }
        }

        Song song = new Song(title, artist, rating);
        return song;
    }
}
