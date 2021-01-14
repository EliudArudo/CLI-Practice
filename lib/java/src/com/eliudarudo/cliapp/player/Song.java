package com.eliudarudo.cliapp.player;

public class Song {
    String title;
    String artist;
    int rating;

    public Song(String title, String artist, int rating) {
        this.title = title;
        this.artist = artist;
        this.rating = rating;
    }

    public void print() {
        String title = Utility.printWithBuffer(this.title, 20);
        String artist = Utility.printWithBuffer(this.artist, 27);
        System.out.println(title + " " + artist + " " + this.rating);
    }
}
