const { printWithBuffer } = require("./utility")

module.exports.Song = class {
    constructor(title, artist, rating) {
        this.title = title
        this.artist = artist
        this.rating = rating
    }

    print() {
        const title = printWithBuffer(this.title, 20)
        const artist = printWithBuffer(this.artist, 27)
        console.log(`${title} ${artist} ${this.rating}`)
    }
}