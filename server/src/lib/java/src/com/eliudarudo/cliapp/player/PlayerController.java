package com.eliudarudo.cliapp.player;

import java.util.ArrayList;

class PlayerController {
    private ArrayList<Song> playlist;
    private ArrayList<Choice> choices;
    private int cursor;

    public PlayerController(ArrayList<Song> songs, ArrayList choices) {
        this.playlist = songs;
        this.choices = choices;
        this.cursor = 0;
    }

    public void printMenu() {
        for(Choice choice:this.choices) {
            String letter = choice.letter;
            String statement = choice.statement;
            System.out.println(letter + " - " + statement);
        }
    }

    public void printCurrentSong() {
        if(this.playlist.size() == 0) {
            System.out.println("No song playing currently");
            return;
        }

        System.out.println("Playing:");
        Song song = this.playlist.get(this.cursor);
        song.print();
    }

    public void playFirstSong() {
        System.out.println("Playing first song");
        this.cursor = 0;
        this.printCurrentSong();
    }

    public void playNextSong() {
        int nextCursor = this.cursor + 1;
        if(nextCursor >= this.playlist.size()) {
            System.out.println("Wrapping to start of playlist");
            this.cursor = 0;
        } else {
            this.cursor = nextCursor;
        }
        System.out.println("Playing next song");
        this.printCurrentSong();
    }

    public void playPreviousSong() {
        int previousCursor = this.cursor - 1;
        if(previousCursor < 0) {
            System.out.println("Wrapping to end of playlist");
            this.cursor = this.playlist.size() - 1;
        } else {
            this.cursor = previousCursor;
        }
        System.out.println("Playing previous song");
        this.printCurrentSong();
    }

    public void addPlayNewSong(Song song) {
        this.playlist.add(this.cursor, song);
        this.printCurrentSong();
    }

    public void listCurrentPlaylist() {
        if(this.playlist.size() == 0) {
            System.out.println("No songs in the current playlist");
            return;
        }

        for(Song song: this.playlist) {
             song.print();
        }

        System.out.println("\nCurrent: ");
        Song song = this.playlist.get(this.cursor);
        song.print();
    }

}
