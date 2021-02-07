module.exports.Option = class {
    constructor(index, title) {
        this.index = index
        this.title = title
    }

    print() {
        console.log(`${this.index}. ${this.title}`)
    }
}