// import 'package:dart/player/main.dart';
import 'dart:io';

import 'package:dart/player/main.dart' as player;
import 'package:dart/questionnaire/main.dart' as questionnaire;

import 'package:dart/player/input_mod.dart' as inputMod;

import 'package:dart/options.dart';

void printOptions() {
  print("MAIN MENU");
  print("===================================");
  print("Please select one of the following: ");

  List<Option> options = [
    Option(1, "Music player"),
    Option(2, "Developer trivia"),
    Option(3, "Quit (or Q)")
  ];

  for (Option option in options) {
    option.printItem();
  }
  print("");
}

void displayMenu() {
  String selection = "";

  while (true) {
    printOptions();
    selection = inputMod.input("Selection: ").toUpperCase();
    print("");

    if (selection == "1") {
      player.display();
    } else if (selection == "2") {
      questionnaire.display();
    } else if (selection == "3" || selection == "Q") {
      print("Thanks for playing our games!");
      break;
    } else {
      print("Didn't catch that, please select \n");
    }
  }
}

void main() {
  displayMenu();
}
