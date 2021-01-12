class Choice:
    def __init__(self, letter, statement):
        self.letter = letter
        self.statement = statement

    def fetch_statement(self):
        return self.statement

    def fetch_letter(self):
        return self.letter
