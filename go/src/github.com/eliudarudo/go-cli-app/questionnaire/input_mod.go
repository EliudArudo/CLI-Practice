package questionnaire

import (
	"fmt"
	"strings"
)

// GetSelection function
func GetSelection() string {
	fmt.Println("==================================")
	fmt.Print("Enter your choice (Q to quit): ")

	var selection string
	fmt.Scanln(&selection)

	return strings.ToUpper(selection)
}
