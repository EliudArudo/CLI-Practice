mod player;
#[allow(dead_code)]
mod questionnaire;
mod options;

use options::MenuOption;


/* 
   About Rust

   - Borrowing means using a variable and releasing it, not allocating it a new memory
   - Whenever a variable enters a function, it's moved into the function and cleaned out of memory
     * Meaning that we need to use borrow operation which is "&"
   - Use .iter() in a vector to make sure the list's items are not moved, but borrowed only
   - Indices and lengths of vectors are usize
   - 2 double returns from functions
     * Option<type> -> Some(<type>) and None
     * Result<type> -> Ok(<type>) and Err(error)
*/

fn print_options() {
    println!("MAIN MENU");
    println!("===================================");
    println!("Please select one of the following: ");

    let options = vec![
        MenuOption{ index: 1, title: "Music player".to_string()},
        MenuOption{ index: 2, title: "Developer trivia".to_string()},
        MenuOption{ index: 3, title: "Quit (or Q)".to_string()},
    ];

    for option in options.iter() {
        option.print();
    }
    println!("");
}


fn display_menu() {
    let mut selection: String;
    loop {
        print_options();

        selection = questionnaire::input_mod::get_upper_case_input("Selection: ");
        println!("");

        match selection.as_str() {
            "1" => player::display(),
            "2" => questionnaire::display(),
            "3" | "Q" => { 
                println!("Thanks for playing our games!");
                break;
            }
            _ => println!("Didn't catch that, please select \n")
        }

    }
}

fn main() {
    display_menu();
}
