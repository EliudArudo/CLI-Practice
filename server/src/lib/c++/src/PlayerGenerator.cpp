#include "PlayerGenerator.hpp"

PlayerGenerator::PlayerGenerator(std::vector<Song> songs, std::vector<Choice> choices) : playlist(songs), choices(choices)
{
    cursor = 0;
}

void PlayerGenerator::printMenu()
{
    for (Choice choice : choices)
    {
        std::cout << choice.letter << " - " << choice.statement << std::endl;
    }
}

void PlayerGenerator::printCurrentSong()
{
    int choicesSize = static_cast<int>(choices.size());
    if (choicesSize == 0)
    {
        std::cout << "No song playing currently" << std::endl;
        return;
    }

    std::cout << "Playing:" << std::endl;

    Song song = playlist[cursor];
    song.print();
}

void PlayerGenerator::playFirstSong()
{
    std::cout << "Playing first song" << std::endl;
    cursor = 0;
    printCurrentSong();
}

void PlayerGenerator::playNextSong()
{
    int nextCursor = cursor + 1;
    /* Because playlist.size gives size_type, not int */
    size_t nextCursorInt = nextCursor;

    if (nextCursorInt >= playlist.size())
    {
        std::cout << "Wrapping to start of playlist" << std::endl;
        cursor = 0;
    }
    else
    {
        cursor = nextCursor;
    }
    std::cout << "Playing next song" << std::endl;
    printCurrentSong();
}

void PlayerGenerator::playPreviousSong()
{
    int previousCursor = cursor - 1;
    if (previousCursor < 0)
    {
        std::cout << "Wrapping to end of playlist" << std::endl;
        cursor = playlist.size() - 1;
    }
    else
    {
        cursor = previousCursor;
    }
    std::cout << "Playing previous song" << std::endl;
    printCurrentSong();
}

void PlayerGenerator::addPlayNewSong(Song song)
{
    /* Use iterator to insert items into vector */
    playlist.insert(playlist.begin() + cursor, song);
    printCurrentSong();
}

void PlayerGenerator::listCurrentPlaylist()
{
    int playlistSize = static_cast<int>(playlist.size());
    if (playlistSize == 0)
    {
        std::cout << "No songs in the current playlist" << std::endl;
        return;
    }

    for (Song song : playlist)
    {
        song.print();
    }

    // std::cout << "\nCurrent: " << std::endl;
    // Song song = playlist[cursor];
    // song.print();
}