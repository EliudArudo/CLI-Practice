import "dart:math";

import "package:dart/questionnaire/question.dart";

/* -------------------------------------------- */
class RandomGenerator {
  RandomGenerator() {}

  int randint(int min, int max) {
    if (max == 0) {
      return max;
    }

    Random random = new Random();
    return min + random.nextInt(max - min);
  }
}
/* -------------------------------------------- */

bool stringIsValid(String string) {
  return string.length > 0;
}

void printFieldErrorMessage() {
  print("Please try again, invalid input");
}

String fetchUserEvaluation(
    String defaultMessage, List<Question> correctQuestions) {
  String message = "";

  var frontend = "frontend";
  var backend = "backend";
  var devops = "devops";
  var mobile = "mobile";

  Map<String, int> developerRating = {
    frontend: 0,
    backend: 0,
    devops: 0,
    mobile: 0
  };

  for (Question question in correctQuestions) {
    String tag = question.tag;
    developerRating[tag] += 1;
  }

  const passingLimit = 3;
  const failureLimit = 2;

  var isFrontendDeveloper = developerRating[frontend] > failureLimit &&
      developerRating[backend] <= failureLimit &&
      developerRating[devops] <= failureLimit &&
      developerRating[mobile] <= failureLimit;

  var isBackendDeveloper = developerRating[frontend] <= failureLimit &&
      developerRating[backend] > failureLimit &&
      developerRating[devops] <= failureLimit &&
      developerRating[mobile] <= failureLimit;

  var isDevopsEngineer = developerRating[frontend] < failureLimit &&
      developerRating[backend] < failureLimit &&
      developerRating[devops] > failureLimit &&
      developerRating[mobile] < failureLimit;

  var isMobileDeveloper = developerRating[frontend] < failureLimit &&
      developerRating[backend] < failureLimit &&
      developerRating[devops] < failureLimit &&
      developerRating[mobile] > failureLimit;

  var isFullStackDeveloper = developerRating[frontend] > failureLimit &&
      developerRating[backend] > failureLimit &&
      developerRating[devops] < failureLimit;

  var isSoftwareEngineer = developerRating[frontend] > failureLimit &&
      developerRating[backend] > failureLimit &&
      developerRating[devops] >= failureLimit;

  var isAllRounder = developerRating[frontend] >= failureLimit &&
      developerRating[backend] >= failureLimit &&
      developerRating[devops] >= failureLimit &&
      developerRating[mobile] >= failureLimit;

  // print("frontend developer: ${isFrontendDeveloper}");
  // print("backend developer: ${isBackendDeveloper}");
  // print("devops developer: ${isDevopsEngineer}");
  // print("mobile developer: ${isMobileDeveloper}");
  // print("fullstack developer: ${isFullStackDeveloper}");
  // print("software engineer: ${isSoftwareEngineer}");
  // print("all rounder: ${isAllRounder}");

  if (isAllRounder) {
    message = "WOW! Looks like we got an all rounder, congratulations!!!";
  } else if (isSoftwareEngineer) {
    message = "You're definitely a Software engineer :-)";
  } else if (isFullStackDeveloper) {
    message = "Congratulations, Oh Fullstack developer!";
  } else if (isDevopsEngineer) {
    message = "You're definitely a DevOps engineer";
  } else if (isMobileDeveloper) {
    message = "Looks like you are a mobile developer!";
  } else if (isBackendDeveloper) {
    message = "Another great backend developer!";
  } else if (isFrontendDeveloper) {
    message = "Looks like you are a frontend developer, right?";
  } else {
    message = defaultMessage;
  }

  message += "\n";

  return message;
}
