/* 
   Must import all files here to ensure they can see each other
   Use pub mod 'something' to make that module public, so its a::b::c <- public nested module
*/
mod utility;
mod question;
mod choice;
mod questions;
pub mod input_mod;

use std::collections::HashMap;
use utility::Random;
use question::Question;

struct Questionnaire {
    questions: Vec<Question>,
    correct_questions: Vec<Question>,
    /* & means that we're borrowing these variables, not taking and moving them!!! */
    fetch_user_evaluation: fn(&str,&Vec<Question>) -> String
}

impl Questionnaire {
    fn initialize(&self) {
      println!("===== DEVELOPER TRIVIA ========================");
      println!("Hi there! We have some questions for you: ");
      println!("Please answer them without looking.");
      println!("In case you don't know the answer, it's okay to choose option (D)");
      println!("===============================================");
    }

    fn debug_question(&self, question: &Question) {
        println!("......... {} ..... ({}) ....................", question.tag, question.answer);
        let mut developer_rating:HashMap<String, u8> = HashMap::new();

        developer_rating.insert("frontend".to_string(), 0);
        developer_rating.insert("backend".to_string(), 0);
        developer_rating.insert("devops".to_string(), 0);
        developer_rating.insert("mobile".to_string(), 0);

        for question in self.correct_questions.iter() {
            let tag = &question.tag;
            /* 
                &tag prevents tag from being moved
            */
            developer_rating.insert(tag.to_string(), developer_rating[&tag.to_string()] + 1);
        }

        /* 
           Note that in not using &key and &value, the values are moved and finally developer rating is cleared 
           out of memory
        */
        for (key, value) in developer_rating {
            println!("{} : {}", key, value);
        }

        println!("...............................................");
    }

    fn print_question(&self, index:u8, question: &Question) {
        println!("{}. {}", index, question.statement);
        println!("");
        for choice in question.choices.iter() {
            println!("{}) {}", &choice.letter, &choice.statement);
        }

        // Debug
        // self.debug_question(&question)
    }

    fn fetch_question_at_index(&mut self, index:u8) -> Option<&Question> {
        /* 
           Get finds data already existing at a memory and sends the location of that data
        */
        return match self.questions.get(index as usize) {
            Some(question) => Some(question),
            None => None
        };
    }

    fn pop_a_question(&mut self) -> Option<Question> {
        /* 
          Pop removes the item from current memory location, meaning that we need to instantiate it,
          hence we're returning a new memory allocated variable of Question
        */
        return match self.questions.pop() {
            Some(question) => Some(question),
            None => None
        };
    }

    fn evaluate_question(&mut self, question: Question, answer: &str) {
        if question.answer.as_str() == answer {
            self.correct_questions.push(question);
        }
    }

    fn evaluate_user(&self) {
        let default_message = "You're a great developer, keep pushing!";

        let message = (self.fetch_user_evaluation)(default_message, &self.correct_questions);
        println!("{}",message);
    }
}


fn prepare_questions() -> Vec<Question> {
   let frontend_questions_copy = questions::fetch_frontend_questions();
   let backend_questions_copy = questions::fetch_backend_questions();
   let devops_questions_copy = questions::fetch_devops_questions();
   let mobile_questions_copy = questions::fetch_mobile_questions();

   let mut init_array = vec![mobile_questions_copy, devops_questions_copy, frontend_questions_copy, backend_questions_copy];

   let mut questions: Vec<Question> = vec![];
   // Debug
   // let mut random_indices: Vec<i32> = vec![];

   let random = Random{};

   while init_array.len()  != 0 as usize {
       /* 
         Dereference the init_array to convert it to i32
       */
       let random_index = random.randint((*&init_array.len() - 1) as i32);
       
       if (&init_array)[random_index as usize].len() == 0 as usize {
           &init_array.remove(random_index as usize);
       } else {
           /* 
             Pop provides a Some/None, hence the need for a match statement
           */
           match init_array[random_index as usize].pop() {
               Some(question) => { 
                   questions.push(question);
                   // Debug
                   // &random_indices.push(random_index);
                },
               None => {}
           }
       }
   }

   return questions;
   
}

pub fn display() {
    let questions = prepare_questions();
    // println!("questions size: {}", questions.len());
    let correct_questions: Vec<Question> = vec![];
    let mut questionnaire = Questionnaire{questions: questions, correct_questions: correct_questions, fetch_user_evaluation: utility::fetch_user_evaluation};

    questionnaire.initialize();

    let mut index = 1;

    loop {
        println!("");
        match questionnaire.pop_a_question() {
            Some(question) => {
                questionnaire.print_question(index, &question);
                /* 
                  input_mod::get_selection() variable is freed at the end os this expression,
                  so we need the reference to this
                */
                let answer = input_mod::get_selection();

                if answer == "A".to_string() || answer == "B".to_string() || answer == "C".to_string() || answer == "D".to_string() {
                    questionnaire.evaluate_question(question, &answer);
                } else if answer == "Q".to_string() {
                  break;   
                } else {
                    println!("\nYour choice was invalid, please try again");
                    continue;
                }

            },
            None => {
                break;
            }
        };

        index += 1
    }

    questionnaire.evaluate_user();
}