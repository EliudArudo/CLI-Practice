#include <random>
#include "QuestionnaireUtility.hpp"

int QUtility::Random::randint(int min, int max)
{
    if (max == 0)
    {
        return max;
    }

    return min + (std::rand() % (max - min + 1));
}

bool QUtility::stringIsValid(std::string string)
{
    return static_cast<int>(string.size()) > 0;
}

void QUtility::printFieldErrorMessage()
{
    std::cout << "Please try again, invalid input" << std::endl;
}

std::string QUtility::fetchUserEvaluation(std::string defaultMessage, std::vector<Question> correctQuestions)
{
    std::string message = "";
    std::map<std::string, int> developerRating{{"frontend", 0}, {"backend", 0}, {"devops", 0}, {"mobile", 0}};

    std::string tag;
    for (Question question : correctQuestions)
    {
        tag = question.tag;
        developerRating[tag] += 1;
    }

    std::string frontend = "frontend";
    std::string backend = "backend";
    std::string devops = "devops";
    std::string mobile = "mobile";

    // int passingLimit = 3;
    int failureLimit = 2;

    bool isFrontendDeveloper = developerRating[frontend] > failureLimit && developerRating[backend] <= failureLimit && developerRating[devops] <= failureLimit && developerRating[mobile] <= failureLimit;

    bool isBackendDeveloper = developerRating[frontend] <= failureLimit && developerRating[backend] > failureLimit && developerRating[devops] <= failureLimit && developerRating[mobile] <= failureLimit;

    bool isDevopsEngineer = developerRating[frontend] < failureLimit && developerRating[backend] < failureLimit && developerRating[devops] > failureLimit && developerRating[mobile] < failureLimit;

    bool isMobileDeveloper = developerRating[frontend] < failureLimit && developerRating[backend] < failureLimit && developerRating[devops] < failureLimit && developerRating[mobile] > failureLimit;

    bool isFullStackDeveloper = developerRating[frontend] > failureLimit && developerRating[backend] > failureLimit && developerRating[devops] < failureLimit;

    bool isSoftwareEngineer = developerRating[frontend] > failureLimit && developerRating[backend] > failureLimit && developerRating[devops] >= failureLimit;

    bool isAllRounder = developerRating[frontend] >= failureLimit && developerRating[backend] >= failureLimit && developerRating[devops] >= failureLimit && developerRating[mobile] >= failureLimit;

    // std::cout << "frontend developer: " + isFrontendDeveloper << std::endl;
    // std::cout << "backend developer: " + isBackendDeveloper << std::endl;
    // std::cout << "devops developer: " + isDevopsEngineer << std::endl;
    // std::cout << "mobile developer: " + isMobileDeveloper << std::endl;
    // std::cout << "fullstack developer: " + isFullStackDeveloper << std::endl;
    // std::cout << "software engineer: " + isSoftwareEngineer << std::endl;
    // std::cout << "all rounder: " + isAllRounder << std::endl;

    if (isAllRounder)
    {
        message = "WOW! Looks like we got an all rounder, congratulations!!!";
    }
    else if (isSoftwareEngineer)
    {
        message = "You're definitely a Software engineer :-)";
    }
    else if (isFullStackDeveloper)
    {
        message = "Congratulations, Oh Fullstack developer!";
    }
    else if (isDevopsEngineer)
    {
        message = "You're definitely a DevOps engineer";
    }
    else if (isMobileDeveloper)
    {
        message = "Looks like you are a mobile developer!";
    }
    else if (isBackendDeveloper)
    {
        message = "Another great backend developer!";
    }
    else if (isFrontendDeveloper)
    {
        message = "Looks like you are a frontend developer, right?";
    }
    else
    {
        message = defaultMessage;
    }

    message += "\n";

    return message;
}
