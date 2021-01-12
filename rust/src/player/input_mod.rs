use crate::player::song;
use crate::player::utility;

use song as song_package;
use song_package::Song;
use std::io::{ stdin, stdout, Write};

/* ----------------------------------------------------------------- */
fn input(prompt: &str) -> String {
    let mut input = String::new();
    print!("{}", prompt.to_string());
    /* 
       Required so the prompt is given first priority 
       Also, we need to import the Write function for .flush to work
    */
    let _ = stdout().flush();
    
    return match stdin().read_line(&mut input) {
        Ok(_) => input.trim().to_string(),
        Err(_) => "".to_string()
    }
}
/* ----------------------------------------------------------------- */


pub fn get_selection() -> String {
    println!("==================================================");

    let selection = input("Enter a selection (Q to quit): ").to_uppercase();
    return selection
}

pub fn get_song() -> Song {
    let mut title:String;
    let mut artist:String;
    let mut rating_string:String;
    let rating: u8;

    loop {
        title = input("Enter song name: ");
        /* 
           Input returns slice with 2 items inside - beginning and ending space
           Trim it to get proper input
        */
        if utility::string_is_valid(title.as_str()) {
            break;
        }
    }

    loop {
        artist = input("Enter song artist: ");
        if utility::string_is_valid(artist.as_str()) {
            break;
        }
    }

    loop {
        rating_string = input("Enter your rating: ");
        let result = rating_string.parse::<u8>();
        match result {
            Ok(_) => { 
                rating = result.unwrap();
                break;
            },
            Err(_) => println!("Please enter a number")
        }
    }

    let song = Song{title: title, artist: artist, rating: rating};
    return song;
}
