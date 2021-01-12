/* 
    &str is a slice of characters
*/
pub fn print_with_buffer(string: &str, buffer_length: u8) -> String {
    let mut buffer = String::new();

    for i in 0..buffer_length {
        /* 
            string.len() is a usize type
        */
        if usize::from(i) < string.len() {
            /* 
                &string prevents string from being used once and thrown away
                nth function requires a 'usize' type, which we have to convert using
                   .into  

                Using push to push characters to String   
                nth(X) requires a usize, which we can convert an int by doing i.into
            */
            buffer.push(string.chars().nth(i.into()).unwrap());
        } else {
            /* 
               A literal string is &str, not String
            */
            buffer.push_str(" ")
        }
    }
    return buffer
}

pub fn string_is_valid(string: &str) -> bool {
    if string.len() == 0 {
        return false
    }

    return true
}

#[allow(dead_code)]
pub fn print_field_error_message() {
    println!("Please try again, invalid input")
}