class Option {
  int index;
  String title;

  Option(int index, String title) {
    this.index = index;
    this.title = title;
  }

  void printItem() {
    print("${this.index}. ${this.title}");
  }
}
