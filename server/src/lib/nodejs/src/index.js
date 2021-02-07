const { Option } = require("./option")
const player = require("./player")
const questionnaire = require("./questionnaire")

/* -------------------------------------------------- */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})


function input(statement) {
    return new Promise(resolve => {
        readline.question(statement, resolve)
    })
}

async function getSelectionWithText(input, text) {
    let selection

    try {
        selection = await input(text)
        selection = selection.toUpperCase()

    } catch (e) {
        console.log(e)
        selection = ""
    } finally {
        return selection
    }
}

/* -------------------------------------------------- */

function printOptions() {
    console.log("MAIN MENU")
    console.log("===================================")
    console.log("Please select one of the following: ")

    const options = [
        new Option(1, "Music player"),
        new Option(2, "Developer trivia"),
        new Option(3, "Quit (or Q)")
    ]

    for (const option of options)
        option.print()
    console.log("")
}


async function displayMenu() {

    let breakOutOfLoop = false

    while (true) {
        printOptions()

        const selection = await getSelectionWithText(input, "Selection: ")
        console.log("")

        switch (selection) {
            case "1":
                await player.display(input)
                break
            case "2":
                await questionnaire.display(input)
                break
            case "3":
            case "Q":
                breakOutOfLoop = true
                console.log("Thanks for playing our games!")
                break
            default:
                console.log("Didn't catch that, please select \n")
                break
        }

        if (breakOutOfLoop)
            break
    }
}

async function main() {
    await displayMenu()
    process.exit(0)
}

main()