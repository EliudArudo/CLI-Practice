import "package:dart/questionnaire/utility.dart" as utility;
import "package:dart/questionnaire/question.dart";
import "package:dart/questionnaire/choice.dart";
import "package:dart/questionnaire/questions.dart";
import "package:dart/questionnaire/input_mod.dart" as inputMod;

class Questionnaire {
  List<Question> questions;
  List<Question> correctQuestions;
  Function fetchUserEvaluation;

  Questionnaire(List<Question> questions, Function fetchUserEvaluation) {
    this.questions = questions;
    this.correctQuestions = [];
    this.fetchUserEvaluation = fetchUserEvaluation;
  }

  void initialize() {
    print("===== DEVELOPER TRIVIA ========================");
    print("Hi there! We have some questions for you: ");
    print("Please answer them without looking.");
    print("In case you don't know the answer, it's okay to choose option (D)");
    print("===================================");
  }

  void debugQuestion(Question question) {
    print(
        "......... ${question.tag} ..... (${question.answer}) ....................");

    Map<String, int> developerRating = {
      "frontend": 0,
      "backend": 0,
      "devops": 0,
      "mobile": 0
    };

    for (Question question in this.correctQuestions) {
      String tag = question.tag;
      developerRating[tag] += 1;
    }

    for (String key in developerRating.keys) {
      print("${key} : ${developerRating[key]}");
    }

    print("......................................................");
  }

  void printQuestion(int index, Question question) {
    print("${index}. ${question.statement}");
    print("");
    for (Choice choice in question.choices) {
      print("${choice.letter}) ${choice.statement}");
    }

    // Debug
    // this.debugQuestion(question);
  }

  Question fetchQuestionAtIndex(int index) {
    try {
      Question question = this.questions[index];
      return question;
    } catch (e) {
      return null;
    }
  }

  Question popAQuestion() {
    try {
      Question question = this.questions.removeLast();
      return question;
    } catch (e) {
      return null;
    }
  }

  void evaluateQuestion(Question question, String answer) {
    if (question.answer == answer) {
      this.correctQuestions.add(question);
    }
  }

  void evaluateUser() {
    String defaultMessage = "You're a great developer, keep pushing!";

    String message =
        this.fetchUserEvaluation(defaultMessage, this.correctQuestions);

    print(message);
  }
}

List<Question> prepareQuestions() {
  List<Question> frontendQuestionsCopy = frontendQuestions.toList();
  List<Question> backendQuestionsCopy = backendQuestions.toList();
  List<Question> devopsQuestionsCopy = devopsQuestions.toList();
  List<Question> mobileQuestionsCopy = mobileQuestions.toList();

  List<List<Question>> initArray = [
    backendQuestionsCopy,
    devopsQuestionsCopy,
    mobileQuestionsCopy,
    frontendQuestionsCopy,
  ];

  List<Question> questions = [];

  utility.RandomGenerator random = new utility.RandomGenerator();

  while (initArray.length != 0) {
    var randomIndex = random.randint(0, initArray.length - 1);

    if (initArray[randomIndex].length == 0) {
      initArray.removeAt(randomIndex);
    } else {
      Question question = initArray[randomIndex].removeLast();
      questions.add(question);
    }
  }

  return questions;
}

void display() {
  List<Question> questions = prepareQuestions();
  Questionnaire questionnaire =
      new Questionnaire(questions, utility.fetchUserEvaluation);

  questionnaire.initialize();

  int index = 1;

  while (true) {
    print("");
    Question question = questionnaire.popAQuestion();

    if (question != null) {
      questionnaire.printQuestion(index, question);
      String answer = inputMod.getSelection();

      if (answer == "A" || answer == "B" || answer == "C" || answer == "D") {
        questionnaire.evaluateQuestion(question, answer);
      } else if (answer == "Q") {
        break;
      } else {
        print("\nYour choice was invalid, please try again");
        continue;
      }
    } else {
      break;
    }

    index += 1;
  }

  questionnaire.evaluateUser();
}
