import "package:dart/questionnaire/choice.dart";

class Question {
  String statement;
  List<Choice> choices;
  String answer;
  String tag;

  Question(String statement, List<Choice> choices, String answer, String tag) {
    this.statement = statement;
    this.choices = choices;
    this.answer = answer;
    this.tag = tag;
  }
}
