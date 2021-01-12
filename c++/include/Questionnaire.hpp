#include <vector>

#include "QuestionnaireGenerator.hpp"
#include "QuestionnaireQuestion.hpp"
#include "QuestionnaireQuestions.hpp"
#include "QuestionnaireUtility.hpp"
#include "QuestionnaireInputMod.hpp"

class Questionnaire
{
public:
    static std::vector<Question> prepareQuestions();
    static void display();
};