pub struct MenuOption {
    pub index: u8,
    pub title: String
}

impl MenuOption {
    pub fn print(&self) {
        println!("{}. {}", self.index, self.title);
    }
}