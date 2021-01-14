module.exports.Question = class {
    constructor(statement, choices, answer, tag) {
        this.statement = statement
        this.choices = choices
        this.answer = answer
        this.tag = tag
    }
}