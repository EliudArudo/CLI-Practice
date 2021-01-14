#include "QuestionnaireQuestion.hpp"

Question::Question(std::string statement, std::vector<QChoice> choices, std::string answer, std::string tag) : statement(statement), choices(choices), answer(answer), tag(tag) {}