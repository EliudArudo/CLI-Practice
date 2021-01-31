# https://data-flair.training/blogs/object-oriented-programming-in-r/
# http://adv-r.had.co.nz/S4.html
# run source('main.r') from this directory
# run quit()
# Windows CMD does not identify 'message', instead use 'cat(...,"\n")'
setwd(getwd())
library(methods)

source('player/main.r')
source('questionnaire/main.r')
source('option.r')
source('player/utility.r')

printOptions <- function() {
    cat("\nMAIN MENU\n")
    cat("===================================\n")
    cat("Please select one of the following: \n")

    options <- c(
        Option(index=1, title="Music player"),
        Option(index=2, title="Developer trivia"),
        Option(index=3, title="Quit (or Q)")
    )

    tryCatch(
        {
           for(option in options) {
               printOption(option)
           }
        },
        error=function(err){
            cat(err, "\n")
        }
        ) 
    

}

displayMenu <- function() {
    
    selection <- ""

    while(TRUE) {
        printOptions()
        selection <- playerinput("\nSelection: ")
        selection <- toupper(selection)
        
        tryCatch(
            {
                if(selection == "1") {
                    player.display()
                } else if (selection == "2") {
                    questionnaire.display()
                } else if (selection == "3" || selection == "Q") {
                    cat("Thanks for playing our games!\n")
                    break
                } else {
                    cat("\nDidn't catch that, please select \n")
                }

            },
            error=function(err) {
                cat("err: ", err, "\n")
            }
        )
        
    }
}

displayMenu()

