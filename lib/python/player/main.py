from .input_mod import get_selection, get_song
from .choice import Choice
from .song import Song


class Player:
    def __init__(self, songs, choices):
        self.playlist = songs
        self.choices = choices
        self.cursor = 0

    def print_menu(self):
        for choice in self.choices:
            letter = choice.letter
            statement = choice.statement
            print(letter + " - " + statement)

    def print_current_song(self):
        if len(self.playlist) == 0:
            print("No song playing currently")
            return

        print("Playing:")
        song = self.playlist[self.cursor]
        song.print()

    # Play first song

    def play_first_song(self):
        print("Playing first song")
        self.cursor = 0
        self.print_current_song()

    # Play next song
    def play_next_song(self):
        next_cursor = self.cursor + 1
        if next_cursor >= (len(self.playlist)):
            print("Wrapping to start of playlist")
            self.cursor = 0
        else:
            self.cursor = next_cursor
        print("Playing next song")
        self.print_current_song()

    # Play previous song
    def play_previous_song(self):
        previous_cursor = self.cursor - 1
        if previous_cursor < 0:
            print("Wrapping to end of playlist")
            self.cursor = len(self.playlist) - 1
        else:
            self.cursor = previous_cursor
        print("Playing previous song")
        self.print_current_song()

    # Add and play a new song at current location
    def add_play_new_song(self, song):
        self.playlist.insert(self.cursor, song)
        self.print_current_song()

    # List the current playlist
    def list_current_playlist(self):
        if len(self.playlist) == 0:
            print("No songs in the current playlist")
            return

        for song in self.playlist:
            song.print()

        print("\nCurrent: ")
        song = self.playlist[self.cursor]
        song.print()


def display():
    print(
        "===== MUSIC PLAYER ===============================")
    playlist = [
        Song(title="God's Plan", artist="Drake", rating=5),
        Song(title="Never Be The Same", artist="Camila Cabello", rating=5),
        Song(title="Pray For Me", artist="The Weekend and K. Lamar", rating=4),
        Song(title="The Middle", artist="Zedd, Maren Morris & Grey", rating=5),
        Song(title="Wait", artist="Maroone 5", rating=4),
        Song(title="Whatever It Takes", artist="Imagine Dragons", rating=3)
    ]

    choices = [
        Choice(letter="F", statement="Play First Song"),
        Choice(letter="N", statement="Play Next Song"),
        Choice(letter="P", statement="Play Previous Song"),
        Choice(letter="A", statement="Add and play a new song at current location"),
        Choice(letter="L", statement="List the current playlist")
    ]

    player = Player(playlist, choices)
    player.list_current_playlist()

    selection = ""

    while True:
        print("")
        player.print_menu()
        selection = get_selection()
        print("")

        if selection == 'F':
            player.play_first_song()
        elif selection == 'N':
            player.play_next_song()
        elif selection == 'P':
            player.play_previous_song()
        elif selection == 'A':
            song = get_song()
            player.add_play_new_song(song)
        elif selection == 'L':
            player.list_current_playlist()
        elif selection == 'Q':
            break
        else:
            print("Didn't get that, please try again")
