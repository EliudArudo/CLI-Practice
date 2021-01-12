package questionnaire

// Question struct
type Question struct {
	Statement string
	Choices   []Choice
	Answer    string
	Tag       string
}
