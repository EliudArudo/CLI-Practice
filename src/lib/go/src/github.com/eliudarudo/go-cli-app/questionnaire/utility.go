package questionnaire

import (
	"fmt"
	"math/rand"
)

/* ---------------------------------------------- */

// Random struct
type Random struct{}

// RandInt struct
func (random *Random) RandInt(min int, max int) int {
	if max == 0 {
		return max
	}
	// rand.Seed(time.Now().UnixNano())

	return (rand.Intn(max-min) + min)
}

/* ---------------------------------------------- */

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

// FetchUserEvaluation function
func FetchUserEvaluation(defaultMessage string, correctQuestions *[]Question) string {
	var message string

	developerRating := map[string]int{
		"frontend": 0,
		"backend":  0,
		"devops":   0,
		"mobile":   0,
	}

	for _, question := range *correctQuestions {
		tag := question.Tag
		developerRating[tag]++
	}

	frontend := "frontend"
	backend := "backend"
	devops := "devops"
	mobile := "mobile"

	// passingLimit := 3
	falureLimit := 2

	isFrontendDeveloper := developerRating[frontend] > falureLimit && developerRating[backend] <= falureLimit && developerRating[devops] <= falureLimit && developerRating[mobile] <= falureLimit

	isBackendDeveloper := developerRating[frontend] <= falureLimit && developerRating[backend] > falureLimit && developerRating[devops] <= falureLimit && developerRating[mobile] <= falureLimit

	isDevopsEngineer := developerRating[frontend] < falureLimit && developerRating[backend] < falureLimit && developerRating[devops] > falureLimit && developerRating[mobile] < falureLimit

	isMobileDeveloper := developerRating[frontend] < falureLimit && developerRating[backend] < falureLimit && developerRating[devops] < falureLimit && developerRating[mobile] > falureLimit

	isFullStackDeveloper := developerRating[frontend] > falureLimit && developerRating[backend] > falureLimit && developerRating[devops] < falureLimit

	isSoftwareEngineer := developerRating[frontend] > falureLimit && developerRating[backend] > falureLimit && developerRating[devops] >= falureLimit

	isAllRounder := developerRating[frontend] >= falureLimit && developerRating[backend] >= falureLimit && developerRating[devops] >= falureLimit && developerRating[mobile] >= falureLimit

	// fmt.Println("frontend developer: %v" , isFrontendDeveloper)
	// fmt.Println("backend developer: %v" , isBackendDeveloper)
	// fmt.Println("devops developer: %v" , isDevopsEngineer)
	// fmt.Println("mobile developer: %v" , isMobileDeveloper)
	// fmt.Println("fullstack developer: %v" , isFullStackDeveloper)
	// fmt.Println("software engineer: %v" , isSoftwareEngineer)
	// fmt.Println("all rounder: %v" , isAllRounder)

	if isAllRounder {
		message = "WOW! Looks like we got an all rounder, congratulations!!!"
	} else if isSoftwareEngineer {
		message = "You're definitely a Software engineer :-)"
	} else if isFullStackDeveloper {
		message = "Congratulations, Oh Fullstack developer!"
	} else if isDevopsEngineer {
		message = "You're definitely a DevOps engineer"
	} else if isMobileDeveloper {
		message = "Looks like you are a mobile developer!"
	} else if isBackendDeveloper {
		message = "Another great backend developer!"
	} else if isFrontendDeveloper {
		message = "Looks like you are a frontend developer, right?"
	} else {
		message = defaultMessage
	}

	message += "\n"

	return message
}
