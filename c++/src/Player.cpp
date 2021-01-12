#include "Player.hpp"

void Player::display()
{
    std::cout << "===== MUSIC PLAYER ===============================" << std::endl;
    std::vector<Song> playlist{
        Song("God's Plan", "Drake", 5),
        Song("Never Be The Same", "Camila Cabello", 5),
        Song("Pray For Me", "The Weekend and K. Lamar", 4),
        Song("The Middle", "Zedd, Maren Morris & Grey", 5),
        Song("Wait", "Maroone 5", 4),
        Song("Whatever It Takes", "Imagine Dragons", 3)};

    std::vector<Choice> choices{
        Choice("F", "Play First Song"),
        Choice("N", "Play Next Song"),
        Choice("P", "Play Previous Song"),
        Choice("A", "Add and play a new song at current location"),
        Choice("L", "List the current playlist")};

    PlayerGenerator player(playlist, choices);
    player.listCurrentPlaylist();

    std::string selection;

    while (true)
    {
        std::cout << "" << std::endl;
        player.printMenu();
        selection = InputMod::getSelection();
        std::cout << "" << std::endl;

        if (selection == "F")
        {
            player.playFirstSong();
        }
        else if (selection == "N")
        {
            player.playNextSong();
        }
        else if (selection == "P")
        {
            player.playPreviousSong();
        }
        else if (selection == "A")
        {
            Song song = InputMod::getSong();
            player.addPlayNewSong(song);
        }
        else if (selection == "L")
        {
            player.listCurrentPlaylist();
        }
        else if (selection == "Q")
        {
            break;
        }
        else
        {
            std::cout << "Didn't get that, please try again" << std::endl;
        }
    }
};