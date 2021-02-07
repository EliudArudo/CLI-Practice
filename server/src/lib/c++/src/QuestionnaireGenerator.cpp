#include "QuestionnaireGenerator.hpp"

QuestionnaireGenerator::QuestionnaireGenerator(std::vector<Question> questions, std::function<std::string(std::string, std::vector<Question>)> fetchUserEvaluation) : questions(questions), fetchUserEvaluation(fetchUserEvaluation) {}

void QuestionnaireGenerator::initialize()
{
    std::cout << "===== DEVELOPER TRIVIA ========================" << std::endl;
    std::cout << "Hi there! We have some questions for you: " << std::endl;
    std::cout << "Please answer them without looking." << std::endl;
    std::cout << "In case you don't know the answer, it's okay to choose option (D)" << std::endl;
    std::cout << "===================================" << std::endl;
}

void QuestionnaireGenerator::debugQuestion(Question question)
{
    std::cout << "......... " + question.tag + " ..... (" + question.answer + ") ...................." << std::endl;
    std::map<std::string, int> developerRating{{"frontend", 0}, {"backend", 0}, {"devops", 0}, {"mobile", 0}};

    std::string tag;
    for (Question question : correctQuestions)
    {
        tag = question.tag;
        developerRating[tag] += 1;
    }

    /* How to iterate through map */
    for (const std::pair<std::string, int> &v : developerRating)
    {
        std::cout << v.first + " : " + std::to_string(v.second) << std::endl;
    }

    std::cout << "......................................................" << std::endl;
}

void QuestionnaireGenerator::printQuestion(int index, Question question)
{
    std::cout << std::to_string(index) + ". " + question.statement << std::endl;
    std::cout << "" << std::endl;

    for (QChoice choice : question.choices)
    {
        std::cout << choice.letter + ") " + choice.statement << std::endl;
    }

    // Debug
    // debugQuestion(question);
}

Question QuestionnaireGenerator::fetchQuestionAtIndex(int index)
{
    return questions[index];
}

Question QuestionnaireGenerator::popAQuestion()
{
    int questionSize = static_cast<int>(questions.size());
    /* 
       Cannot get a vector item using vec[index], we use vec.at(i)
    */
    Question question = questions.at(questionSize - 1);
    questions.pop_back();
    return question;
}

void QuestionnaireGenerator::evaluateQuestion(Question question, std::string answer)
{
    if (question.answer == answer)
    {
        correctQuestions.push_back(question);
    }
}

void QuestionnaireGenerator::evaluateUser()
{
    std::string defaultMessage = "You're a great developer, keep pushing!";

    std::string message = fetchUserEvaluation(defaultMessage, correctQuestions);

    std::cout << message << std::endl;
}