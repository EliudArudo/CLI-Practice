package player

import (
	"fmt"
	"strconv"
)

// Song struct
type Song struct {
	Title  string
	Artist string
	Rating int
}

// Print function
func (song *Song) Print() {
	title := PrintWithBuffer(song.Title, 20)
	artist := PrintWithBuffer(song.Artist, 27)
	rating := strconv.Itoa(song.Rating)

	fmt.Println(title + " " + artist + " " + rating)
}
