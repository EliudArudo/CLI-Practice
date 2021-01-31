package player

import "fmt"

// Player struct
type Player struct {
	Playlist []Song
	Choices  []Choice
	Cursor   int
}

// PrintMenu function
func (player *Player) PrintMenu() {
	for _, choice := range player.Choices {
		letter := choice.Letter
		statement := choice.Statement
		fmt.Println(letter + " - " + statement)
	}
}

// PrintCurrentSong function
func (player *Player) PrintCurrentSong() {
	if len(player.Playlist) == 0 {
		fmt.Println("No song playing currently")
		return
	}

	fmt.Println("Playing: ")
	song := player.Playlist[player.Cursor]
	song.Print()
}

// PlayFirstSong function
func (player *Player) PlayFirstSong() {
	fmt.Println("Playing first song")
	player.Cursor = 0
	player.PrintCurrentSong()
}

// PlayNextSong function
func (player *Player) PlayNextSong() {
	nextCursor := player.Cursor + 1
	if nextCursor >= len(player.Playlist) {
		fmt.Println("Wrapping to start of playlist")
		player.Cursor = 0
	} else {
		player.Cursor = nextCursor
	}
	fmt.Println("Playing next song")
	player.PrintCurrentSong()
}

// PlayPreviousSong function
func (player *Player) PlayPreviousSong() {
	previousCursor := player.Cursor - 1
	if previousCursor < 0 {
		fmt.Println("Wrapping to end of playlist")
		player.Cursor = len(player.Playlist) - 1
	} else {
		player.Cursor = previousCursor
	}
	fmt.Println("Playing previous song")
	player.PrintCurrentSong()
}

// AddNewPlaySong function
func (player *Player) AddNewPlaySong(song *Song) {
	player.Playlist = append(
		player.Playlist[:player.Cursor+1],
		player.Playlist[player.Cursor:]...,
	)
	player.Playlist[player.Cursor] = *song
	player.PrintCurrentSong()
}

// ListCurrentPlaylist function
func (player *Player) ListCurrentPlaylist() {
	if len(player.Playlist) == 0 {
		fmt.Println("No songs in the current playlist")
		return
	}

	for _, song := range player.Playlist {
		song.Print()
	}

	fmt.Println("\nCurrent")
	song := player.Playlist[player.Cursor]
	song.Print()
}

// Display function
func Display() {
	fmt.Println("===== MUSIC PLAYER ===============================")
	playlist := []Song{
		Song{"God's Plan", "Drake", 5},
		Song{"Never Be The Same", "Camila Cabello", 5},
		Song{"Pray For Me", "The Weekend and K. Lamar", 4},
		Song{"The Middle", "Zedd, Maren Morris & Grey", 5},
		Song{"Wait", "Maroone 5", 4},
		Song{"Whatever It Takes", "Imagine Dragons", 4},
	}

	choices := []Choice{
		Choice{"F", "Play First Song"},
		Choice{"N", "Play Next Song"},
		Choice{"P", "Play Previous Song"},
		Choice{"A", "Add and play a new song at current location"},
		Choice{"L", "List the current playlist"},
	}

	player := &Player{Playlist: playlist, Choices: choices}
	player.ListCurrentPlaylist()

	var selection string

Loop:
	for {
		fmt.Println("")
		player.PrintMenu()
		selection = GetSelection()
		fmt.Println("")

		switch selection {
		case "F":
			player.PlayFirstSong()
		case "N":
			player.PlayNextSong()
		case "P":
			player.PlayPreviousSong()
		case "A":
			song := GetSong()
			player.AddNewPlaySong(song)
		case "L":
			player.ListCurrentPlaylist()
		case "Q":
			break Loop
		default:
			fmt.Println("Didn't get that, please try again")
		}
	}
}
