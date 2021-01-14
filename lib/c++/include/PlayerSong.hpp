#pragma once
#include <iostream>
#include <string>

class Song
{
public:
    Song(std::string, std::string, int);
    std::string title;
    std::string artist;
    int rating;

    void print();
};