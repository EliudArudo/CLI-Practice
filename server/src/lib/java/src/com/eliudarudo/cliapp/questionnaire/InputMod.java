package com.eliudarudo.cliapp.questionnaire;

import java.util.Scanner;

public class InputMod {
    public static String getSelection() {
        System.out.println("==================================");
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your choice (Q to quit): ");

        try {
            String selection = scanner.nextLine().toUpperCase();
            return selection;
        } catch(Exception e) {
            return "";
        }
    }
}
