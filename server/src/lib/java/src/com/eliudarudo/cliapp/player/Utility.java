package com.eliudarudo.cliapp.player;

import java.lang.*;

public class Utility {
    public static String printWithBuffer(String string, int bufferLength) {
        StringBuilder buffer = new StringBuilder();
        for(int i=0; i < bufferLength; i++) {
            if(i < string.length()) {
                buffer.append(string.charAt(i));
            } else {
                buffer.append(" ");
            }
        }
        return buffer.toString();
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
}
