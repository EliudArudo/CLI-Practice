package player

import (
	"fmt"
	"strconv"
	"strings"
	"time"
)

// GetSelection function
func GetSelection() string {
	fmt.Println("==================================================")
	fmt.Print("Enter a selection (Q to quit): ")

	var selection string
	fmt.Scanln(&selection)

	return strings.ToUpper(selection)
}

// GetSong function
func GetSong() *Song {
	var title, artist, ratingStr string
	var rating int

	for {
		fmt.Print("Enter song name: ")
		fmt.Scanln(&title)
		if StringIsValid(title) {
			break
		}
	}

	time.Sleep(50 * time.Millisecond)

	for {
		fmt.Print("Enter song artist: ")
		fmt.Scanln(&artist)
		if StringIsValid(artist) {
			break
		}
	}

	for {
		fmt.Print("Enter your rating: ")
		fmt.Scanln(&ratingStr)
		ratingVal, err := strconv.Atoi(ratingStr)
		if err != nil {
			fmt.Println("Please enter a number")
		} else {
			rating = ratingVal
			break
		}
	}

	song := &Song{
		Title:  title,
		Artist: artist,
		Rating: rating,
	}

	// Returns reference to the song object created
	return song
}
