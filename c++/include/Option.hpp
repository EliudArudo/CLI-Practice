#include <iostream>
#include <string>

class Option
{
public:
    int index;
    std::string title;
    Option(int, std::string);
    void print();
};