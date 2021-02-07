#include "PlayerUtility.hpp"
#include "PlayerInputMod.hpp"
#include <algorithm> // For transform

/* ----------------------------------------------------- */
std::string trim(std::string string)
{
    string.erase(0, string.find_first_not_of("\t\n\v\f\r ")); // left trim
    string.erase(string.find_last_not_of("\t\n\v\f\r ") + 1); // right trim

    return string;
}

std::string input(std::string prompt)
{
    std::string selection;

    try
    {
        std::cout << prompt;
        std::getline(std::cin, selection);

        selection = trim(selection);
    }
    catch (...)
    {
        selection = "";
    }

    return selection;
}
/* ----------------------------------------------------- */

std::string InputMod::getSelection()
{
    std::cout << "==================================================" << std::endl;
    std::string selection;

    try
    {
        selection = input("Enter a selection (Q to quit): ");
        std::transform(selection.begin(), selection.end(), selection.begin(), ::toupper);
    }
    catch (...)
    {
        selection = "";
    }

    return selection;
}

Song InputMod::getSong()
{
    std::string title = "";
    std::string artist = "";
    std::string ratingString = "";
    int rating = 0;

    while (true)
    {
        title = input("Enter song name: ");
        if (Utility::stringIsValid(title))
        {
            break;
        }
    }

    while (true)
    {
        artist = input("Enter song artist: ");
        if (Utility::stringIsValid(artist))
        {
            break;
        }
    }

    while (true)
    {
        try
        {
            ratingString = input("Enter your rating: ");
            rating = std::stoi(ratingString);
            break;
        }
        catch (...)
        {
            std::cout << "Please enter a number" << std::endl;
        }
    }

    /* 
      WOW! This is how a new class object is instantiated
    */
    Song song(title, artist, rating);
    return song;
}
