use crate::questionnaire::question;
use std::collections::HashMap;

use question::Question;

/* ------------------------------------------------- */
pub struct Random {}


/* 
   WOW!!! We can use C to borrow functionalities, such as this C module which gives us
   the ability to write random runction
*/
extern "C" {
    fn rand() -> i32;
}

impl Random {
     pub fn randint(&self, max: i32) -> i32 {
        let random:i32;
        /* 
           Run C code only under unsafe
        */
        if max == 0 {
           return max
        }

        unsafe {
            random = rand() % max;
            // println!("Generated: {}, between 0 and {}", random, max)
        }  
        return random;
     }
}
/* ------------------------------------------------- */

pub fn string_is_valid(string: &str) -> bool {
    return string.len() > 0 as usize;
}


pub fn print_field_error_message() {
    println!("Please try again, invalid input");
}

/* 
  Note here that we don't use '&' for Vec because it's moved, so we need to
  borrow it for our safety

  We're borrowing Vec, not moving it!!!
*/
pub fn fetch_user_evaluation(default_message: &str, correct_questions: &Vec<Question>) -> String {
    let mut message:String;

    let frontend = String::from("frontend");
    let backend = String::from("backend");
    let devops = String::from("devops");
    let mobile = String::from("mobile");
     
    let mut developer_rating: HashMap<String, u8> = HashMap::new();
    /* 
       Note - On insert, frontend variable is moved into map, so we have to borrow it, using
       the '&' operator
    */
    developer_rating.insert(frontend.to_string(), 0);
    developer_rating.insert(backend.to_string(), 0);
    developer_rating.insert(devops.to_string(), 0);
    developer_rating.insert(mobile.to_string(), 0);

    /* .iter() prevents items from being moved */
    for question in correct_questions.iter() {
        let tag = &question.tag;
        /* 
           .to_string creates a new allocation
        */
        developer_rating.insert(tag.to_string(), developer_rating[&tag.to_string()] + 1);
    }

    let _passing_limit:u8 = 3;
    let failure_limit:u8 = 2;
 
    let is_frontend_developer = developer_rating[&frontend] > failure_limit && developer_rating[&
        backend] <= failure_limit && developer_rating[&devops] <= failure_limit && developer_rating[&mobile] <= failure_limit;

    let is_backend_developer = developer_rating[&frontend] <= failure_limit && developer_rating[&
        backend] > failure_limit && developer_rating[&devops] <= failure_limit && developer_rating[&mobile] <= failure_limit;

    let is_devops_engineer = developer_rating[&frontend] < failure_limit && developer_rating[&
        backend] < failure_limit && developer_rating[&devops] > failure_limit && developer_rating[&mobile] < failure_limit;

    let is_mobile_developer = developer_rating[&frontend] < failure_limit && developer_rating[&
        backend] < failure_limit && developer_rating[&devops] < failure_limit && developer_rating[&mobile] > failure_limit;

    let is_full_stack_developer = developer_rating[&frontend] > failure_limit && developer_rating[&
        backend] > failure_limit && developer_rating[&devops] < failure_limit;

    let is_software_engineer = developer_rating[&frontend] > failure_limit && developer_rating[&
        backend] > failure_limit && developer_rating[&devops] >= failure_limit;

    let is_all_rounder = developer_rating[&frontend] >= failure_limit && developer_rating[&
        backend] >= failure_limit && developer_rating[&devops] >= failure_limit && developer_rating[&mobile] >= failure_limit;

    // println!("frontend developer: {}", is_frontend_developer)
    // println!("backend developer: {}", is_backend_developer)
    // println!("devops developer: {}", is_devops_engineer)
    // println!("mobile developer: {}", is_mobile_developer)
    // println!("fullstack developer: {}", is_full_stack_developer)
    // println!("software engineer: {}", is_software_engineer)
    // println!("all rounder: {}", is_all_rounder)   

    if is_all_rounder{ 
        message = "WOW! Looks like we got an all rounder, congratulations!!!".to_string();
    }
    else if is_software_engineer{ 
        message = "You're definitely a Software engineer :-)".to_string();
    }
    else if is_full_stack_developer{ 
        message = "Congratulations, Oh Fullstack developer!".to_string();
    }
    else if is_devops_engineer{ 
        message = "You're definitely a DevOps engineer".to_string();
    }
    else if is_mobile_developer{ 
        message = "Looks like you are a mobile developer!".to_string();
    }
    else if is_backend_developer{ 
        message = "Another great backend developer!".to_string();
    }
    else if is_frontend_developer{ 
        message = "Looks like you are a frontend developer, right?".to_string();
    }
    else { 
        message = default_message.to_string();
    }

    message += "\n";

    return message;
}