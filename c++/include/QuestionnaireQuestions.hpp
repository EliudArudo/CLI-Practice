#pragma once
#include <vector>

#include "QuestionnaireQuestion.hpp"
#include "QuestionnaireQuestions.hpp"
#include "QuestionnaireChoice.hpp"

class Questions
{
public:
    static std::vector<Question> fetchFrontendQuestions();
    static std::vector<Question> fetchBackendQuestions();
    static std::vector<Question> fetchDevopsQuestions();
    static std::vector<Question> fetchMobileQuestions();
};