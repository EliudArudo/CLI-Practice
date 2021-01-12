package player

// Choice Struct
type Choice struct {
	Letter    string
	Statement string
}

// FetchStatement function
func (choice *Choice) FetchStatement() string {
	return choice.Letter
}

// FetchLetter function
func (choice *Choice) FetchLetter() string {
	return choice.Statement
}
