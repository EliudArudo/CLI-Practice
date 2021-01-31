class Choice {
  String letter;
  String statement;

  Choice(String letter, String statement) {
    this.letter = letter;
    this.statement = statement;
  }

  String fetchStatement() {
    return this.letter;
  }

  String fetchLetter() {
    return this.statement;
  }
}
