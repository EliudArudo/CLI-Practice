import "package:dart/questionnaire/choice.dart";
import "package:dart/questionnaire/question.dart";

var frontendQuestions = [
  Question(
      "What comes to your mind when I say 'Svelte'?",
      [
        Choice("A", "Just another Javascript framework"),
        Choice("B", "It’s a new language"),
        Choice("C", "Smallest bundle size"),
        Choice("D", "Not sure man"),
      ],
      "C",
      "frontend"),
  Question(
      "What's used to style HTML files?",
      [
        Choice("A", "Condensed Style Sheets"),
        Choice("B", "Cascaded Style Scripts"),
        Choice("C", "Cascaded Style Sheet"),
        Choice("D", "I don't know my guy"),
      ],
      "C",
      "frontend"),
  Question(
      "Google applications mostly use Material design for their UI",
      [
        Choice("A", "Yes, they do"),
        Choice("B", "Nah, they use Bootstrap"),
        Choice("C", "They use Tailwind CSS"),
        Choice("D", "I have no idea about this"),
      ],
      "A",
      "frontend"),
  Question(
      "The Angular framework was created by Google",
      [
        Choice("A", "Definitely"),
        Choice("B", "No, it’s by Facebook"),
        Choice("C", "It’s developed by Netflix for their UIs"),
        Choice("D", "I don’t know much about frontend development frameworks"),
      ],
      "A",
      "frontend"),
  Question(
      "What does React, Vue and Angular have in common?",
      [
        Choice("A", "They are languages"),
        Choice("B", "They're frameworks from different languages"),
        Choice("C", "All compile to HTML, CSS and JS files"),
        Choice("D", "I have no idea about these guys"),
      ],
      "C",
      "frontend")
];

var backendQuestions = [
  Question(
      "Ever heard of 'Laravel’? What's it used for?",
      [
        Choice("A", "Development of the backend applications"),
        Choice("B", "Native applications"),
        Choice("C", "Frontend development"),
        Choice("D", "Never heard of it"),
      ],
      "A",
      "backend"),
  Question(
      "Redis cannot be used as a standalone server database",
      [
        Choice("A", "It can"),
        Choice("B", "Redis is not a database"),
        Choice("C", "True"),
        Choice("D", "I don't know what Redis is"),
      ],
      "C",
      "backend"),
  Question(
      "How would you use caching to reduce your server response times?",
      [
        Choice("A", "Cache common requests"),
        Choice("B", "It's not a way to reduce response times"),
        Choice("C", "Cache all responses"),
        Choice("D", "I don't know the answer to this"),
      ],
      "A",
      "backend"),
  Question(
      "Which of the statements below is true when it comes to Docker?",
      [
        Choice("A", "It's an alternative to Kubernetes"),
        Choice("B", "Used for containerization of applications"),
        Choice("C", "Used to monitor backend applications"),
        Choice("D", "I have no idea what Docker is"),
      ],
      "B",
      "backend"),
  Question(
      "What's the largest file size that can be carried in a single request?",
      [
        Choice("A", "50MB"),
        Choice("B", "10MB"),
        Choice("C", "100MB"),
        Choice("D", "Not sure man"),
      ],
      "A",
      "backend")
];

var devopsQuestions = [
  Question(
      "Travis CI and Github actions serve almost the same functionality",
      [
        Choice("A", "I don't think so"),
        Choice("B", "Yessir, they do"),
        Choice("C", "Github actions is a version control system"),
        Choice("D", "I don't know these two technologies"),
      ],
      "B",
      "devops"),
  Question(
      "Docker was here long before Kubernetes",
      [
        Choice("A", "This is a big ass lie"),
        Choice("B", "That's a fact"),
        Choice("C", "Both were developed around the same time"),
        Choice("D", "I have no idea what Docker or Kubernetes is"),
      ],
      "A",
      "devops"),
  Question(
      "Prometheus is famous for monitoring server applications",
      [
        Choice("A", "I agree"),
        Choice("B", "Statement is false"),
        Choice("C", "It only collects information"),
        Choice("D", "Didn't catch that"),
      ],
      "A",
      "devops"),
  Question(
      "Kali is a Linux distro",
      [
        Choice("A", "Not!"),
        Choice("B", "It's a flavor of Ubuntu"),
        Choice("C", "It is!"),
        Choice("D", "I don't mess with Linux"),
      ],
      "C",
      "devops"),
  Question(
      "What does Google Cloud Platform, Azure and Heroku have in common?",
      [
        Choice("A", "All have IaaS solutions"),
        Choice("B", "They're the top cloud providers"),
        Choice("C", "They all provide PaaS solutions"),
        Choice("D", "They nothing in common"),
      ],
      "C",
      "devops")
];

var mobileQuestions = [
  Question(
      "It's cheaper to host my applications on Apple app store than Google play store",
      [
        Choice("A", "That’s a lie my guy"),
        Choice("B", "Sure, Apple offer the cheapest hosting for mobile apps"),
        Choice("C", "They offer almost the same pricing"),
        Choice("D", "I don't host my apps here"),
      ],
      "A",
      "mobile"),
  Question(
      "Which one of the following describes what Swift does?",
      [
        Choice("A", "It’s used for developing iOS apps"),
        Choice("B", "It can be used for developing Safari web extensions"),
        Choice("C", "Second name of a very famous music artist"),
        Choice("D", "I don’t know anything about Swift"),
      ],
      "A",
      "mobile"),
  Question(
      "Cross platform development allows me to implement one design for all my apps",
      [
        Choice("A",
            "You have to implement different designs using native UI SDKs"),
        Choice("B", "This is true, the design will be the same for all apps"),
        Choice("C", "It’s one codebase but designs come out differently"),
        Choice("D", "I have no idea"),
      ],
      "B",
      "mobile"),
  Question(
      "Large scale mobile applications can be built without user journeys and design prototypes",
      [
        Choice("A", "User journeys are not required for large projects"),
        Choice(
            "B", "That’s impossible, user’s journeys should be a prerequisite"),
        Choice("C",
            "Design prototypes are created at the same time an MVP is developed"),
        Choice("D", "I don’t do mobile development"),
      ],
      "B",
      "mobile"),
  Question(
      "Which one of the following best describes what Java SDK is for?",
      [
        Choice("A", "It’s for developing backend applications"),
        Choice("B", "It’s for developing different versions of Java"),
        Choice("C", "It’s used for android app development"),
        Choice("D", "I’m not well versed with Java"),
      ],
      "C",
      "mobile")
];
