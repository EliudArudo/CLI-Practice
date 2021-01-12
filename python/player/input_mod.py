from .song import Song
from .utility import string_is_valid, print_field_error_message


def get_selection():
    print("==================================================")
    selection = input("Enter a selection (Q to quit): ").upper()

    try:
        selection = selection.upper()
    except:
        selection = ""

    return selection


def get_song():
    title = ""
    artist = ""
    rating = 0

    while True:
        title = input("Enter song name: ")
        if string_is_valid(title):
            break

    while True:
        artist = input("Enter song artist: ")
        if string_is_valid(artist):
            break

    while True:
        try:
            rating = input("Enter your rating: ")
            int(rating)
            break
        except:
            print("Please enter a number")

    song = Song(title=title, artist=artist, rating=rating)
    return song
