# https://data-flair.training/blogs/object-oriented-programming-in-r/
# http://adv-r.had.co.nz/S4.html
# run source("src/main.r")
# run quit()

source('src/player/main.r')
source('src/questionnaire/main.r')
source('src/option.r')
source('src/player/utility.r')

printOptions <- function() {
    message("MAIN MENU")
    message("===================================")
    message("Please select one of the following: ")

    options <- c(
        Option(index=1, title="Music player"),
        Option(index=2, title="Developer trivia"),
        Option(index=3, title="Quit (or Q)")
    )

    for(option in options)
      printOption(option)

    message("")  
}

displayMenu <- function() {

    selection <- ""

    while(TRUE) {
        printOptions()
        selection <- playerinput("Selection: ")
        selection <- toupper(selection)
        message("")

        if(selection == "1") {
            player.display()
        } else if (selection == "2") {
            questionnaire.display()
        } else if (selection == "3" || selection == "Q") {
            message("Thanks for playing our games!")
            break
        } else {
            message("Didn't catch that, please select \n")
        }
    }
}

displayMenu()

