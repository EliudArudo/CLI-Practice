package player

import (
	"fmt"
	"strings"
)

// PrintWithBuffer function
func PrintWithBuffer(str string, bufferLength int) string {

	runes := []rune(str)
	/*
	   Using string builder most effective way to append
	   a character (rune) to a string
	*/
	var buffer strings.Builder
	for i := 0; i < bufferLength; i++ {
		if i < len(runes) {
			buffer.WriteRune(runes[i])
		} else {
			buffer.WriteString(" ")
		}
	}

	return buffer.String()
}

// StringIsValid function
func StringIsValid(str string) bool {
	if len(str) == 0 {
		return false
	}
	return true
}

// PrintFieldErrorMessage function
func PrintFieldErrorMessage() {
	fmt.Println("Please try again, invalid input")
}
