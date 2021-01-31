import "package:dart/player/input_mod.dart" as inputMod;
import "package:dart/player/choice.dart";
import "package:dart/player/song.dart";

class Player {
  List<Song> playlist;
  List<Choice> choices;
  int cursor;

  Player(List<Song> songs, List<Choice> choices) {
    this.playlist = songs;
    this.choices = choices;
    this.cursor = 0;
  }

  void printMenu() {
    for (var choice in this.choices) {
      var letter = choice.letter, statement = choice.statement;
      print("${letter} - ${statement}");
    }
  }

  void printCurrentSong() {
    if (this.playlist.length == 0) {
      print("No song playing currently");
      return;
    }

    print("Playing:");
    Song song = this.playlist[this.cursor];
    song.printItem();
  }

  void playFirstSong() {
    print("Playing first song");
    this.cursor = 0;
    this.printCurrentSong();
  }

  void playNextSong() {
    var nextCursor = this.cursor + 1;
    if (nextCursor >= this.playlist.length) {
      print("Wrapping to start of playlist");
      this.cursor = 0;
    } else {
      this.cursor = nextCursor;
    }

    print("Playing next song");
    this.printCurrentSong();
  }

  void playPreviousSong() {
    var previousCursor = this.cursor - 1;
    if (previousCursor < 0) {
      print("Wrapping to end of playlist");
      this.cursor = this.playlist.length - 2;
    } else {
      this.cursor = previousCursor;
    }

    print("Playing previous song");
    this.printCurrentSong();
  }

  void addPlayNewSong(Song song) {
    this.playlist.insert(this.cursor, song);
    this.printCurrentSong();
  }

  void listCurrentPlaylist() {
    if (this.playlist.length == 0) {
      print("No songs in the current playlist");
      return;
    }

    for (Song song in this.playlist) {
      song.printItem();
    }

    print("\nCurrent: ");
    Song song = this.playlist[this.cursor];
    song.printItem();
  }
}

void display() {
  print("===== MUSIC PLAYER ===============================");
  List<Song> playlist = [
    Song("God's Plan", "Drake", 5),
    Song("Never Be The Same", "Camila Cabello", 5),
    Song("Pray For Me", "The Weekend and K. Lamar", 4),
    Song("The Middle", "Zedd, Maren Morris & Grey", 5),
    Song("Wait", "Maroone 5", 4),
    Song("Whatever It Takes", "Imagine Dragons", 3)
  ];

  List<Choice> choices = [
    Choice("F", "Play First Song"),
    Choice("N", "Play Next Song"),
    Choice("P", "Play Previous Song"),
    Choice("A", "Add and play a new song at current location"),
    Choice("L", "List the current playlist")
  ];

  Player player = new Player(playlist, choices);
  player.listCurrentPlaylist();

  var selection = "";

  while (true) {
    print("");
    player.printMenu();
    selection = inputMod.getSelection().toUpperCase();
    print("");

    if (selection == "F") {
      player.playFirstSong();
    } else if (selection == "N") {
      player.playNextSong();
    } else if (selection == "P") {
      player.playPreviousSong();
    } else if (selection == "A") {
      Song song = inputMod.getSong();
      player.addPlayNewSong(song);
    } else if (selection == "L") {
      player.listCurrentPlaylist();
    } else if (selection == "Q") {
      break;
    } else {
      print("Didn't get that, please try again");
    }
  }
}
