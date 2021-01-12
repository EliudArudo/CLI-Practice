use std::io::{ stdin, stdout, Write};

/* ----------------------------------------------------------------- */
fn input(prompt: &str) -> String {
    let mut input = String::new();
    print!("{}", prompt.to_string());

    let _ = stdout().flush();

    return match stdin().read_line(&mut input) {
        Ok(_) => input.trim().to_string(),
        Err(_) => "".to_string()
    };
}

pub fn get_upper_case_input(prompt: &str) -> String {
    return input(prompt).to_uppercase();
}
/* ----------------------------------------------------------------- */

pub fn get_selection() -> String {
    println!("==================================");
    let selection = get_upper_case_input("Enter your choice (Q to quit): ");
    
    return selection;
}