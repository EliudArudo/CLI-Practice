#include "Questionnaire.hpp"

std::vector<Question> Questionnaire::prepareQuestions()
{
    std::vector<Question> frontendQuestions = Questions::fetchFrontendQuestions();
    std::vector<Question> backendQuestions = Questions::fetchBackendQuestions();
    std::vector<Question> devopsQuestions = Questions::fetchDevopsQuestions();
    std::vector<Question> mobileQuestions = Questions::fetchMobileQuestions();

    std::vector<std::vector<Question>> initArray{frontendQuestions, backendQuestions, devopsQuestions, mobileQuestions};
    std::vector<Question> questions;

    int randomIndex;
    QUtility::Random random;

    while (static_cast<int>(initArray.size()) != 0)
    {
        int initArrayLengthSize = static_cast<int>(initArray.size());
        randomIndex = random.randint(0, initArrayLengthSize - 1);

        /* 
            Don't use indices in vectors!!! Use .at and to check if it's empty, use '.empty'
        */
        if (initArray.at(randomIndex).empty())
        {
            initArray.erase(initArray.begin() + randomIndex);
        }
        else
        {
            Question question = initArray.at(randomIndex).back();
            initArray.at(randomIndex).pop_back();
            questions.push_back(question);
        }
    }

    return questions;
}

void Questionnaire::display()
{
    std::vector<Question> questions = Questionnaire::prepareQuestions();
    QuestionnaireGenerator questionnaire(questions, QUtility::fetchUserEvaluation);

    questionnaire.initialize();

    int index = 1;

    while (true)
    {
        std::cout << "" << std::endl;

        try
        {

            Question question = questionnaire.popAQuestion();

            questionnaire.printQuestion(index, question);
            std::string answer = QInputMod::getSelection();
            std::transform(answer.begin(), answer.end(), answer.begin(), ::toupper);

            if (answer == "A" || answer == "B" || answer == "C" || answer == "D")
            {
                questionnaire.evaluateQuestion(question, answer);
            }
            else if (answer == "Q")
            {
                break;
            }
            else
            {
                std::cout << "\nYour choice was invalid, please try again" << std::endl;
                continue;
            }
        }
        catch (std::exception &e)
        /* Catches out of range error on popping question */
        {
            break;
        }

        index += 1;
    }

    questionnaire.evaluateUser();
}