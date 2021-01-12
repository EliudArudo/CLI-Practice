import "package:dart/player/utility.dart" as utility;

class Song {
  String title;
  String artist;
  int rating;

  Song(String title, String artist, int rating) {
    this.title = title;
    this.artist = artist;
    this.rating = rating;
  }

  void printItem() {
    String title = utility.printWithBuffer(this.title, 20);
    String artist = utility.printWithBuffer(this.artist, 27);
    print("${title} ${artist} ${rating}");
  }
}
