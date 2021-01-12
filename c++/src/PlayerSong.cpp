#include "PlayerUtility.hpp"
#include "PlayerSong.hpp"

Song::Song(std::string title, std::string artist, int rating) : title(title), artist(artist), rating(rating)
{
}

void Song::print()
{
    /* Do not declare variables same as object properties */
    std::string _title = Utility::printWithBuffer(title, 20);
    std::string _artist = Utility::printWithBuffer(artist, 20);

    std::cout << _title + " " + _artist + " " + std::to_string(rating) << std::endl;
}
