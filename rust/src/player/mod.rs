#[allow(dead_code)]
mod input_mod;
mod choice;
mod song;
mod utility;
use song as song_package;
use song_package::Song;
use choice::Choice;


/* 
   Don't have to put 'pub' in struct fields because they're not going to be accessed by another 
   module except this one
*/
pub struct Player {
   playlist: Vec<Song>,
   choices: Vec<Choice>,
   cursor: i32
}


impl Player {
   fn print_menu(&self) {
      /* 
         Iterating through vector of structs provides class only, not index
      */
      for choice in self.choices.iter() {
         /* 
            Have to prefix the choice with reference operator '&' to avoid move
            String does not implement the 'Copy' trait
         */
         let letter = &choice.letter;
         let statement = &choice.statement;
         println!("{} - {}", letter, statement);
      }
   }

   fn print_current_song(&self) {
      if self.playlist.len() as u8 == 0 {
         println!("No song playing currently");
         return
      }

      println!("Playing:");
      /* 
        Use & to borrow playlist instead of moving it to 'song' variable
      */
      let song = &self.playlist[self.cursor as usize];
      song.print();
   }

   fn play_first_song(&mut self) {
      /* 
        Adding &mut to function ensures that we can change object values
      */
      println!("Playing first song");
      self.cursor = 0;
      self.print_current_song();
   }

   fn play_next_song(&mut self) {
      /* 
        Use '&' to prevent cursor from being moved over to 'next_cursor' variable
      */
      let next_cursor = &self.cursor + 1;
      /* 
         self.playlist.len() produces usize
      */
      if (next_cursor as usize) >= self.playlist.len() {
         println!("Wrapping to start of playlist");
         self.cursor = 0
      } else {
         self.cursor = next_cursor
      }
      println!("Playing next song");
      self.print_current_song();
   }

   fn play_previous_song(&mut self) {
      let previous_cursor = &self.cursor - 1;
      if (previous_cursor as usize) >= self.playlist.len() {
         println!("Wrapping to end of playlist");
         self.cursor = self.playlist.len() as i32 - 1
      } else {
         self.cursor = previous_cursor
      }
      println!("Playing previous song");
      self.print_current_song();
   }

   /* 
     When we pass the Song item in, a move occurs from the calling function
   */
   fn add_play_new_song(&mut self,song: Song) {
      self.playlist.insert(self.cursor as usize, song);
      self.print_current_song();
   }

   fn list_current_playlist(&self) {
      if self.playlist.len() == 0 as usize {
         println!("No songs in the current playlist");
         return;
      }

      for song in self.playlist.iter() {
         song.print();
      }

      println!("\nCurrent: ");
      let song = &self.playlist[self.cursor as usize];
      song.print();
   }
   
}


pub fn display() {
   println!( "===== MUSIC PLAYER ===============================");
   let playlist = vec![
      Song{title:"God's Plan".to_string(), artist:"Drake".to_string(), rating:5},
        Song{title:"Never Be The Same".to_string(), artist:"Camila Cabello".to_string(), rating:5},
        Song{title:"Pray For Me".to_string(), artist:"The Weekend and K. Lamar".to_string(), rating:4},
        Song{title:"The Middle".to_string(), artist:"Zedd, Maren Morris & Grey".to_string(), rating:5},
        Song{title:"Wait".to_string(), artist:"Maroone 5".to_string(), rating:4},
        Song{title:"Whatever It Takes".to_string(), artist:"Imagine Dragons".to_string(), rating:3}
   ];

   let choices = vec![
      Choice{letter:"F".to_string(), statement:"Play First Song".to_string()},
        Choice{letter:"N".to_string(), statement:"Play Next Song".to_string()},
        Choice{letter:"P".to_string(), statement:"Play Previous Song".to_string()},
        Choice{letter:"A".to_string(), statement:"Add and play a new song at current location".to_string()},
        Choice{letter:"L".to_string(), statement:"List the current playlist".to_string()}
   ];

   /* 
       Must set player to be mutable because values in it will be changed
       in the menu below -- IMPORTANT, otherwise, this will result into problems
   */
   let mut player = Player{ playlist: playlist, choices: choices, cursor: 0};
   player.list_current_playlist();
   
   let mut selection:String;

   loop {
      println!("");
      player.print_menu();
      selection = input_mod::get_selection();
      println!("");

      match selection.as_str() {
         // /* 
         //   "F" provides &str, not String, so we have to convert it
         //   &str is just slice of str
         // */
         "F" => player.play_first_song(),
         "N" => player.play_next_song(),
         "P" => player.play_previous_song(),
         "A" => {
            let song = input_mod::get_song();
            player.add_play_new_song(song);
         },
         "L" => player.list_current_playlist(),
         "Q" => break,
         _ => println!("Didn't get that, please try again"),
      }  
   }
}
