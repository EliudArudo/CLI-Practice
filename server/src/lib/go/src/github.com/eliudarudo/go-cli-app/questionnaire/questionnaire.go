package questionnaire

import (
	"fmt"
	"math/rand"
	"time"
)

// Questionnaire struct
type Questionnaire struct {
	Questions           *[]Question
	CorrectQuestions    []Question
	FetchUserEvaluation func(string, *[]Question) string
}

// Initialize function
func (questionnaire *Questionnaire) Initialize() {
	fmt.Println("===== DEVELOPER TRIVIA ========================")
	fmt.Println("Hi there! We have some questions for you: ")
	fmt.Println("Please answer them without looking.")
	fmt.Println("In case you don't know the answer, it's okay to choose option (D)")
	fmt.Println("===============================================")
}

// DebugQuestion function
func (questionnaire *Questionnaire) DebugQuestion(question *Question) {
	fmt.Println("......... " + question.Tag + " ..... (" + question.Answer + ") ....................")
	developerRating := map[string]int{
		"frontend": 0,
		"backend":  0,
		"devops":   0,
		"mobile":   0,
	}

	for _, question := range questionnaire.CorrectQuestions {
		tag := question.Tag
		developerRating[tag]++
	}

	for key, value := range developerRating {
		fmt.Printf("%v : %v\n", key, value)
	}

	fmt.Println("......................................................")
}

// PrintQuestion function
func (questionnaire *Questionnaire) PrintQuestion(index int, question *Question) {
	fmt.Printf("%v. %v", index, question.Statement)
	fmt.Println("")
	for _, choice := range (*question).Choices {
		fmt.Println(choice.Letter + ") " + choice.Statement)
	}

	// Debug
	// questionnaire.DebugQuestion(question)
}

// FetchQuestionAtIndex function
func (questionnaire *Questionnaire) FetchQuestionAtIndex(index int) *Question {
	question := (*((*questionnaire).Questions))[index]
	return &question
}

// PopAQuestion function
func (questionnaire *Questionnaire) PopAQuestion() *Question {
	length := len(*(*questionnaire).Questions)
	if length == 0 {
		return nil
	}

	question := (*((*questionnaire).Questions))[length-1]

	*((*questionnaire).Questions) = (*((*questionnaire).Questions))[:length-1]

	return &question
}

// EvaluateQuestion function
func (questionnaire *Questionnaire) EvaluateQuestion(question *Question, answer string) {
	if question.Answer == answer {
		(*questionnaire).CorrectQuestions = append((*questionnaire).CorrectQuestions, *question)
	}
}

// EvaluateUser function
func (questionnaire *Questionnaire) EvaluateUser() {
	defaultMessage := "You're a great developer, keep pushing!"
	correctQuestions := (*questionnaire).CorrectQuestions
	message := questionnaire.FetchUserEvaluation(defaultMessage, &correctQuestions)

	fmt.Println(message)
}

/* ------------------------------------------------------- */
func popQuestionArrayAtIndex(array *[][]Question, index int) {
	*array = append((*array)[:index], (*array)[index+1:]...)
}

func popQuestion(array *[]Question) *Question {
	item := (*array)[len(*array)-1]
	*array = (*array)[:len(*array)-1]

	return &item
}

/* ------------------------------------------------------- */

func prepareQuestions() *[]Question {
	frontendQuestionsCopy := append([]Question(nil), FrontendQuestions...)
	backendQuestionsCopy := append([]Question(nil), BackendQuestions...)
	devopsQuestionsCopy := append([]Question(nil), DevOpsQuestions...)
	mobileQuestionsCopy := append([]Question(nil), MobileQuestions...)

	// The rand package is insufficient
	initArray := append([][]Question(nil), backendQuestionsCopy)
	initArray = append(initArray, mobileQuestionsCopy)
	initArray = append(initArray, devopsQuestionsCopy)
	initArray = append(initArray, frontendQuestionsCopy)

	var questions []Question

	random := &Random{}

	var randomIndexArray []string

	rand.Seed(time.Now().UnixNano())

	for len(initArray) != 0 {
		length := len(initArray) - 1
		randomIndex := random.RandInt(0, length)

		if len(initArray[randomIndex]) == 0 {
			popQuestionArrayAtIndex(&initArray, randomIndex)
		} else {
			question := *(popQuestion(&(initArray[randomIndex])))
			questions = append(questions, question)
			randomIndexArray = append(randomIndexArray, question.Tag)
		}
	}

	return &questions
}

// Display function
func Display() {
	questions := prepareQuestions()
	questionnaire := &Questionnaire{Questions: questions, FetchUserEvaluation: FetchUserEvaluation}

	questionnaire.Initialize()

	index := 1

Loop:
	for {
		fmt.Println("")
		question := questionnaire.PopAQuestion()

		if question != nil {
			questionnaire.PrintQuestion(index, question)
			answer := GetSelection()

			switch answer {
			case "A", "B", "C", "D":
				questionnaire.EvaluateQuestion(question, answer)
			case "Q":
				break Loop
			default:
				fmt.Println("\nYour choice was invalid, please try again")
				continue
			}

		} else {
			break
		}

		index++
	}

	questionnaire.EvaluateUser()
}
