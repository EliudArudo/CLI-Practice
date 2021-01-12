class Option:
    def __init__(self, index, title):
        self.index = str(index)
        self.title = title

    def print(self):
        print(self.index + ". " + self.title)
