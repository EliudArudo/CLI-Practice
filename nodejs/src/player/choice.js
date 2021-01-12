module.exports.Choice = class {
    constructor(letter, statement) {
        this.letter = letter
        this.statement = statement
    }

    fetchStatement() {
        return this.statement
    }

    fetchLetter() {
        return this.letter
    }
}