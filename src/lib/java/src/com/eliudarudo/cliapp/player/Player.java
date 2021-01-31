package com.eliudarudo.cliapp.player;

import java.util.ArrayList;


public class Player {
    public static void display() {
        System.out.println("===== MUSIC PLAYER ===============================");

        ArrayList<Song> playlist = new ArrayList<Song>();
        playlist.add(new Song("God's Plan", "Drake", 5));
        playlist.add(new Song("Never Be The Same", "Camila Cabello", 5));
        playlist.add(new Song("Pray For Me", "The Weekend and K. Lamar", 4));
        playlist.add(new Song("The Middle", "Zedd, Maren Morris & Grey", 5));
        playlist.add(new Song("Wait", "Maroone 5", 4));
        playlist.add(new Song("Whatever It Takes", "Imagine Dragons", 3));


        ArrayList<Choice> choices = new ArrayList<>();
        choices.add(new Choice("F", "Play First Song"));
        choices.add(new Choice("N", "Play Next Song"));
        choices.add(new Choice("P", "Play Previous Song"));
        choices.add(new Choice("A", "Add and play a new song at current location"));
        choices.add(new Choice("L", "List the current playlist"));


        PlayerController player = new PlayerController(playlist, choices);
        player.listCurrentPlaylist();

        String selection = "";

        while(true) {
            System.out.println("");
            player.printMenu();
            selection = InputMod.getSelection();
            System.out.println("");

            if(selection.equals("F")) {
                player.playFirstSong();
            }
            else if (selection.equals("N")) {
                player.playNextSong();
            }
            else if (selection.equals("P")) {
                player.playPreviousSong();
            }
            else if (selection.equals("A")) {
                Song song = InputMod.getSong();
                player.addPlayNewSong(song);
            }
            else if (selection.equals("L")) {
                player.listCurrentPlaylist();
            }
            else if (selection.equals("Q")) {
                break;
            }
            else {
                System.out.println("Didn't get that, please try again");
            }
        }
    }
}
