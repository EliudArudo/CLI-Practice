#include <iostream>
#include <vector>
#include <string>
#include <map>

#include "QuestionnaireQuestion.hpp"

class QUtility
{
public:
    class Random
    {
    public:
        int randint(int, int);
    };
    static bool stringIsValid(std::string);
    static void printFieldErrorMessage();
    static std::string fetchUserEvaluation(std::string, std::vector<Question>);
};