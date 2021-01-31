#include "Option.hpp"

Option::Option(int index, std::string title) : index(index), title(title) {}

void Option::print()
{
    std::cout << std::to_string(index) + ". " + title << std::endl;
}