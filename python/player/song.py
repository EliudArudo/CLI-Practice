from .utility import print_with_buffer


class Song:
    def __init__(self, title, artist, rating):
        self.title = title
        self.artist = artist
        self.rating = rating

    def print(self):
        title = print_with_buffer(self.title, 20)
        artist = print_with_buffer(self.artist, 27)
        rating = str(self.rating)
        print(title + " " + artist + " " + rating)
