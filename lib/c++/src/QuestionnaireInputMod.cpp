#include "QuestionnaireInputMod.hpp"
#include <algorithm> // For transform
/* --------------------------------------------- */
std::string q_trim(std::string string)
{
    string.erase(0, string.find_first_not_of("\t\n\v\f\r ")); // left trim
    string.erase(string.find_last_not_of("\t\n\v\f\r ") + 1); // right trim

    return string;
}

std::string q_input(std::string prompt)
{
    std::string selection;

    try
    {
        std::cout << prompt;
        std::getline(std::cin, selection);

        selection = q_trim(selection);
    }
    catch (...)
    {
        selection = "";
    }

    return selection;
}
/* --------------------------------------------- */

std::string QInputMod::getSelection()
{
    std::cout << "==================================" << std::endl;

    std::string selection = "";
    try
    {
        selection = q_input("Enter your choice (Q to quit): ");
        std::transform(selection.begin(), selection.end(), selection.begin(), ::toupper);
    }
    catch (...)
    {
        selection = "";
    }

    return selection;
}