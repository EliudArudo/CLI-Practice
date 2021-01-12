#include <stdio.h>
#include <vector>

#include "Player.hpp"
#include "Questionnaire.hpp"
#include "Option.hpp"

#include "QuestionnaireInputMod.hpp"
// If makefile brings problems, the open it using notepad and adjust tabs
// https://dev.to/talhabalaj/setup-visual-studio-code-for-multi-file-c-projects-1jpi
// Ctrl + Shift + B to build it
// To run this, run > make

/* 
   To add a new file, add a .hpp in include folcer and
   .cpp in .src folder

   .hpp contains the definitions, which you have to include in 
   each .cpp file

   .cpp files implement the definitions,
   - for static functions, don't add the 'static' keyword in the 
     implementation file

   Use #pragma once in .hpp files which are shared across multiple
   files  

   The makefile is made specially for this structure (separating header 
   implementation files)

*/

void printOptions()
{
    std::cout << "MAIN MENU" << std::endl;
    std::cout << "===================================" << std::endl;
    std::cout << "Please select one of the following: " << std::endl;

    std::vector<Option> options{
        Option(1, "Music player"),
        Option(2, "Developer trivia"),
        Option(3, "Quit (or Q)")};

    for (Option option : options)
    {
        option.print();
    }
    std::cout << "" << std::endl;
}

void displayMenu()
{
    std::string selection = "";

    while (true)
    {
        printOptions();
        selection = QInputMod::getSelection();
        std::cout << "" << std::endl;

        if (selection == "1")
        {
            Player::display();
        }
        else if (selection == "2")
        {
            Questionnaire::display();
        }
        else if (selection == "3" || selection == "Q")
        {
            std::cout << "Thanks for playing our games!" << std::endl;
            break;
        }
        else
        {
            std::cout << "Didn't catch that, please select \n"
                      << std::endl;
        }
    }
}

int main()
{

    displayMenu();

    return 0;
}
