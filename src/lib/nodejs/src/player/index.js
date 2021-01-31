const { getSelection, getSong } = require("./inputMod")
const { Choice } = require("./choice")
const { Song } = require("./song")

class Player {
    constructor(songs, choices) {
        this.playlist = songs
        this.choices = choices
        this.cursor = 0
    }

    printMenu() {
        for (const choice of this.choices) {
            const letter = choice.letter
            const statement = choice.statement
            console.log(`${letter} - ${statement}`)
        }
    }

    printCurrentSong() {
        if (this.playlist.length === 0) {
            console.log("No song playing currently")
            return
        }

        console.log("Playing:")
        const song = this.playlist[this.cursor]
        song.print()
    }

    playFirstSong() {
        console.log("Playing first song")
        this.cursor = 0
        this.printCurrentSong()
    }

    playNextSong() {
        const nextCursor = this.cursor + 1
        if (nextCursor >= this.playlist.length) {
            console.log("Wrapping to start of playlist")
            this.cursor = 0
        } else
            this.cursor = nextCursor

        console.log("Playing next song")
        this.printCurrentSong()
    }

    playPreviousSong() {
        const previousCursor = this.cursor - 1
        if (previousCursor < 0) {
            console.log("Wrapping to end of playlist")
            this.cursor = this.playlist.length - 1
        } else
            this.cursor = previousCursor

        console.log("Playing previous song")
        this.printCurrentSong()
    }

    addPlayNewSong(song) {
        this.playlist.splice(this.cursor, 0, song)
        this.printCurrentSong()
    }

    listCurrentPlaylist() {
        if (this.playlist.length === 0) {
            console.log("No songs in the current playlist")
            return
        }

        for (const song of this.playlist)
            song.print()

        console.log("\nCurrent: ")
        const song = this.playlist[this.cursor]
        song.print()
    }
}


module.exports.display = async function (input) {
    console.log(
        "===== MUSIC PLAYER ===============================")

    const playlist = [
        new Song("God's Plan", "Drake", 5),
        new Song("Never Be The Same", "Camila Cabello", 5),
        new Song("Pray For Me", "The Weekend and K. Lamar", 4),
        new Song("The Middle", "Zedd, Maren Morris & Grey", 5),
        new Song("Wait", "Maroone 5", 4),
        new Song("Whatever It Takes", "Imagine Dragons", 3)
    ]

    const choices = [
        new Choice("F", "Play First Song"),
        new Choice("N", "Play Next Song"),
        new Choice("P", "Play Previous Song"),
        new Choice("A", "Add and play a new song at current location"),
        new Choice("L", "List the current playlist")
    ]

    const player = new Player(playlist, choices)
    player.listCurrentPlaylist()

    let selection

    let breakOutOfLoop = false

    while (true) {
        console.log("")
        player.printMenu()
        selection = await getSelection(input)
        console.log("")

        switch (selection) {
            case "F":
                player.playFirstSong()
                break
            case "N":
                player.playNextSong()
                break
            case "P":
                player.playPreviousSong()
                break
            case "A":
                song = await getSong(input)
                player.addPlayNewSong(song)
                break
            case "L":
                player.listCurrentPlaylist()
                break
            case "Q":
                breakOutOfLoop = true
                break
            default:
                console.log("Didn't get that, please try again")
        }

        if (breakOutOfLoop)
            break
    }
}