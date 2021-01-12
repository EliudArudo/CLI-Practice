#include <iostream>
#include <string>
#include <vector>

#include "PlayerSong.hpp"
#include "PlayerChoice.hpp"

class PlayerGenerator
{
    std::vector<Song> playlist;
    std::vector<Choice> choices;
    int cursor;

public:
    PlayerGenerator(std::vector<Song>, std::vector<Choice>);
    void printMenu();
    void printCurrentSong();
    void playFirstSong();
    void playNextSong();
    void playPreviousSong();
    void addPlayNewSong(Song);
    void listCurrentPlaylist();
};