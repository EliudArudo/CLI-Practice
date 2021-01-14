#include "QuestionnaireQuestions.hpp"

std::vector<Question> Questions::fetchFrontendQuestions()
{
    std::vector<Question> frontendQuestions{
        Question(
            "What comes to your mind when I say 'Svelte'?",
            std::vector<QChoice>{
                QChoice("A", "Just another Javascript framework"),
                QChoice("B", "It's a new language"),
                QChoice("C", "Smallest bundle size"),
                QChoice("D", "Not sure man"),
            },
            "C",
            "frontend"),
        Question(
            "What's used to style HTML files?",
            std::vector<QChoice>{
                QChoice("A", "Condensed Style Sheets"),
                QChoice("B", "Cascaded Style Scripts"),
                QChoice("C", "Cascaded Style Sheet"),
                QChoice("D", "I don't know my guy"),
            },
            "C",
            "frontend"),
        Question(
            "Google applications mostly use Material design for their UI",
            std::vector<QChoice>{
                QChoice("A", "Yes, they do"),
                QChoice("B", "Nah, they use Bootstrap"),
                QChoice("C", "They use Tailwind CSS"),
                QChoice("D", "I have no idea about this"),
            },
            "A",
            "frontend"),
        Question(
            "The Angular framework was created by Google",
            std::vector<QChoice>{
                QChoice("A", "Definitely"),
                QChoice("B", "No, it's by Facebook"),
                QChoice("C", "It's developed by Netflix for their UIs"),
                QChoice(
                    "D", "I don't know much about frontend development frameworks"),
            },
            "A",
            "frontend"),
        Question(
            "What does React, Vue and Angular have in common?",
            std::vector<QChoice>{
                QChoice("A", "They are languages"),
                QChoice("B", "They're frameworks from different languages"),
                QChoice("C", "All compile to HTML, CSS and JS files"),
                QChoice("D", "I have no idea about these guys"),
            },
            "C",
            "frontend")};

    return frontendQuestions;
}

std::vector<Question> Questions::fetchBackendQuestions()
{
    std::vector<Question> backendQuestions{
        Question(
            "Ever heard of 'Laravel'? What's it used for?",
            std::vector<QChoice>{
                QChoice("A", "Development of the backend applications"),
                QChoice("B", "Native applications"),
                QChoice("C", "Frontend development"),
                QChoice("D", "Never heard of it"),
            },
            "A",
            "backend"),
        Question(
            "Redis cannot be used as a standalone server database",
            std::vector<QChoice>{
                QChoice("A", "It can"),
                QChoice("B", "Redis is not a database"),
                QChoice("C", "True"),
                QChoice("D", "I don't know what Redis is"),
            },
            "C",
            "backend"),
        Question(
            "How would you use caching to reduce your server response times?",
            std::vector<QChoice>{
                QChoice("A", "Cache common requests"),
                QChoice("B", "It's not a way to reduce response times"),
                QChoice("C", "Cache all responses"),
                QChoice("D", "I don't know the answer to this"),
            },
            "A",
            "backend"),
        Question(
            "Which of the statements below is true when it comes to Docker?",
            std::vector<QChoice>{
                QChoice("A", "It's an alternative to Kubernetes"),
                QChoice("B", "Used for containerization of applications"),
                QChoice("C", "Used to monitor backend applications"),
                QChoice(
                    "D", "I have no idea what Docker is"),
            },
            "B",
            "backend"),
        Question(
            "What's the largest file size that can be carried in a single request?",
            std::vector<QChoice>{
                QChoice("A", "50MB"),
                QChoice("B", "10MB"),
                QChoice("C", "100MB"),
                QChoice("D", "Not sure man"),
            },
            "A",
            "backend")};

    return backendQuestions;
}

std::vector<Question> Questions::fetchDevopsQuestions()
{
    std::vector<Question> devopsQuestions{
        Question(
            "Travis CI and Github actions serve almost the same functionality",
            std::vector<QChoice>{
                QChoice("A", "I don't think so"),
                QChoice("B", "Yessir, they do"),
                QChoice("C", "Github actions is a version control system"),
                QChoice("D", "I don't know these two technologies"),
            },
            "B",
            "devops"),
        Question(
            "Docker was here long before Kubernetes",
            std::vector<QChoice>{
                QChoice("A", "This is a big ass lie"),
                QChoice("B", "That's a fact"),
                QChoice("C", "Both were developed around the same time"),
                QChoice("D", "I have no idea what Docker or Kubernetes is"),
            },
            "A",
            "devops"),
        Question(
            "Prometheus is famous for monitoring server applications",
            std::vector<QChoice>{
                QChoice("A", "I agree"),
                QChoice("B", "Statement is false"),
                QChoice("C", "It only collects information"),
                QChoice("D", "Didn't catch that"),
            },
            "A",
            "devops"),
        Question(
            "Kali is a Linux distro",
            std::vector<QChoice>{
                QChoice("A", "Not!"),
                QChoice("B", "It's a flavor of Ubuntu"),
                QChoice("C", "It is!"),
                QChoice(
                    "D", "I don't mess with Linux"),
            },
            "C",
            "devops"),
        Question(
            "What does Google Cloud Platform, Azure and Heroku have in common?",
            std::vector<QChoice>{
                QChoice("A", "All have IaaS solutions"),
                QChoice("B", "They're the top cloud providers"),
                QChoice("C", "They all provide PaaS solutions"),
                QChoice("D", "They nothing in common"),
            },
            "C",
            "devops")};

    return devopsQuestions;
}

std::vector<Question> Questions::fetchMobileQuestions()
{
    std::vector<Question> mobileQuestions{
        Question(
            "It's cheaper to host my applications on Apple app store than Google play store",
            std::vector<QChoice>{
                QChoice("A", "That's a lie my guy"),
                QChoice(
                    "B", "Sure, Apple offer the cheapest hosting for mobile apps"),
                QChoice("C", "They offer almost the same pricing"),
                QChoice("D", "I don't host my apps here"),
            },
            "A",
            "mobile"),
        Question(
            "Which one of the following describes what Swift does?",
            std::vector<QChoice>{
                QChoice("A", "It's used for developing iOS apps"),
                QChoice(
                    "B", "It can be used for developing Safari web extensions"),
                QChoice("C", "Second name of a very famous music artist"),
                QChoice("D", "I don't know anything about Swift"),
            },
            "A",
            "mobile"),
        Question(
            "Cross platform development allows me to implement one design for all my apps",
            std::vector<QChoice>{
                QChoice(
                    "A", "You have to implement different designs using native UI SDKs"),
                QChoice(
                    "B", "This is true, the design will be the same for all apps"),
                QChoice(
                    "C", "It's one codebase but designs come out differently"),
                QChoice("D", "I have no idea"),
            },
            "B",
            "mobile"),
        Question(
            "Large scale mobile applications can be built without user journeys and design prototypes",
            std::vector<QChoice>{
                QChoice(
                    "A", "User journeys are not required for large projects"),
                QChoice(
                    "B", "That's impossible, user's journeys should be a prerequisite"),
                QChoice(
                    "C", "Design prototypes are created at the same time an MVP is developed"),
                QChoice(
                    "D", "I don't do mobile development"),
            },
            "B",
            "mobile"),
        Question(
            "Which one of the following best describes what Java SDK is for?",
            std::vector<QChoice>{
                QChoice("A", "It's for developing backend applications"),
                QChoice(
                    "B", "It's for developing different versions of Java"),
                QChoice("C", "It's used for android app development"),
                QChoice("D", "I'm not well versed with Java"),
            },
            "C",
            "mobile")};

    return mobileQuestions;
}
