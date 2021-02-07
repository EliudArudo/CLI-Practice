/* 
  Add #plagma once so that calls in other files won't interfere
*/
#pragma once
#include <string>

class Choice
{
public:
    std::string letter;
    std::string statement;
    Choice(std::string letter, std::string statement);
    std::string fetchStatement();
    std::string fetchLetter();
};