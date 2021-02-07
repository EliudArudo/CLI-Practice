#include <iostream>
#include <vector>
#include <functional>
#include <map>

#include "QuestionnaireQuestion.hpp"
#include "QuestionnaireChoice.hpp"

class QuestionnaireGenerator
{
    std::vector<Question> questions;
    std::vector<Question> correctQuestions;
    std::function<std::string(std::string, std::vector<Question>)> fetchUserEvaluation;

public:
    QuestionnaireGenerator(std::vector<Question>, std::function<std::string(std::string, std::vector<Question>)>);
    void initialize();
    void debugQuestion(Question);
    void printQuestion(int, Question);
    Question fetchQuestionAtIndex(int);
    Question popAQuestion();
    void evaluateQuestion(Question, std::string);
    void evaluateUser();
};