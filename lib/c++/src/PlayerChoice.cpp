#include "PlayerChoice.hpp"

Choice::Choice(std::string letter, std::string statement) : letter(letter), statement(statement)
{
}

std::string Choice::fetchStatement()
{
    return statement;
}

std::string Choice::fetchLetter()
{
    return letter;
}