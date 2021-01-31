#pragma once
#include <string>
#include <vector>

#include "QuestionnaireChoice.hpp"

class Question
{
public:
    std::string statement;
    std::vector<QChoice> choices;
    std::string answer;
    std::string tag;
    Question(std::string, std::vector<QChoice>, std::string, std::string);
};