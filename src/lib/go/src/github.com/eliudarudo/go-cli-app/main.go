package main

import (
	"fmt"
	"strings"

	"github.com/eliudarudo/go-cli-app/player"
	"github.com/eliudarudo/go-cli-app/questionnaire"
)

/* --------------------------------------------------------- */

// Option struct
type Option struct {
	index int
	title string
}

// Print function
func (option *Option) Print() {
	fmt.Printf("\n%v. %v", option.index, option.title)
}

func getSelection() string {
	fmt.Println("==================================")
	fmt.Print("Selection: ")

	var selection string
	fmt.Scanln(&selection)

	return strings.ToUpper(selection)
}

/* --------------------------------------------------------- */

func printOptions() {
	fmt.Println("MAIN MENU")
	fmt.Println("===================================")
	fmt.Println("Please select one of the following: ")

	options := []Option{
		Option{1, "Music player"},
		Option{2, "Developer trivia"},
		Option{3, "Quit (or Q)"},
	}

	for _, option := range options {
		option.Print()
	}
	fmt.Println("")
}

func displayMenu() {
	// player.Display()
	// questionnaire.Display()

	var selection string

Loop:
	for {
		printOptions()
		selection = getSelection()
		fmt.Println()

		switch selection {
		case "1":
			player.Display()
		case "2":
			questionnaire.Display()
		case "3", "Q":
			fmt.Println("Thanks for playing our games!")
			break Loop
		default:
			fmt.Printf("Didn't catch that, please select\n")
		}

	}
}

func main() {
	displayMenu()
}
