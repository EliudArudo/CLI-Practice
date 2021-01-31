const { Song } = require("./song")
const { stringIsValid, printFieldErrorMessage } = require("./utility")


module.exports.getSelection = async function (input) {
    console.log("==================================================")
    let selection

    try {
        selection = await input("Enter a selection (Q to quit): ")
        selection = selection.toUpperCase()

    } catch (e) {
        console.log(e)
        selection = ""
    } finally {
        return selection
    }
}

module.exports.getSong = async function (input) {
    let title, artist
    let rating = 0

    while (true) {
        title = await input("Enter song name: ")
        if (stringIsValid(title))
            break

    }



    while (true) {
        artist = await input("Enter song artist: ")
        if (stringIsValid(artist))
            break
    }

    while (true) {
        rating = await input("Enter your rating: ")
        if (stringIsValid(rating) && !isNaN(Number(rating)))
            break
        else
            console.log("Please enter a number")

    }

    const song = new Song(title, artist, rating)
    return song

}