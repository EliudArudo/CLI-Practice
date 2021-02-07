use crate::questionnaire::choice;

use choice::Choice;

pub struct Question {
    pub statement: String,
    pub choices: Vec<Choice>,
    pub answer: String,
    pub tag: String
}