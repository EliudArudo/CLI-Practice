import 'dart:io';

import "package:dart/player/song.dart";
import "package:dart/player/utility.dart" as utility;

/* ---------------------------------------------------- */
String input(String prompt) {
  stdout.write(prompt);
  String selection = stdin.readLineSync().trim();
  return selection;
}
/* ---------------------------------------------------- */

String getSelection() {
  print("==================================================");
  var selection = input("Enter a selection (Q to quit): ");

  return selection;
}

Song getSong() {
  var title = "", artist = "", ratingString = "", rating = 0;

  while (true) {
    title = input("Enter song name: ");
    if (utility.stringIsValid(title)) {
      break;
    }
  }

  while (true) {
    artist = input("Enter song artist: ");
    if (utility.stringIsValid(artist)) {
      break;
    }
  }

  while (true) {
    ratingString = input("Enter your rating: ");
    try {
      rating = int.parse(ratingString);
      break;
    } catch (e) {
      print("Please enter a number");
    }
  }

  Song song = new Song(title, artist, rating);
  return song;
}
