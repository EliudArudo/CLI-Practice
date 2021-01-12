pub struct Choice {
    pub letter: String,
    pub statement: String 
}

#[allow(dead_code)]
impl Choice {
    fn fetch_statement(&self) -> String {
        /* 
          If we return self.statement, we're giving it away for move, so we need to
          convert it again to string so a new variable is created in memory on copy
        */
        self.statement.to_string()
    }

    fn fetch_letter(&self) -> String {
        self.letter.to_string()
    }
}