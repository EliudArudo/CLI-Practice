use crate::player::utility;

/* 
  Struct fields have to be public for us to do
  Song{artist:..., } from another file
  */
pub struct Song {
    pub title: String,
    pub artist: String,
    pub rating: u8
}

impl Song {
    pub fn print(&self) {
        let title = utility::print_with_buffer(self.title.as_str(), 20);
        let artist = utility::print_with_buffer(self.artist.as_str(), 27);
        println!("{} {} {}", title, artist, self.rating);
    }
}