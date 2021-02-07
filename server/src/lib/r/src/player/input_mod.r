source("player/song.r")
source("player/utility.r")

###################################################################
playerinput <- function(prompt) {
  selection <- ""

  tryCatch(
      {
         cat(prompt)
         selection <- readLines('stdin', n=1)    
      },
      error=function(err) {
          cat(err, "\n")
          selection <- ""
      },
      finally=function() {
          return(selection)
      }
    )
}
###################################################################


playerGetSelection <- function() {
    cat("==================================================", "\n")
    selection <- playerinput("Enter a selection (Q to quit): ")
    selection <- toupper(selection)
    return(selection)   
}

playerGetSong <- function() {
    title <- ""
    artist <- ""
    ratingString <- ""
    rating <- 0

    while(TRUE) {
        title <- playerinput("Enter song name: ")
        if(playerStringIsValid(title)) {
            break
        }
    }

    while(TRUE) {
        artist <- playerinput("Enter song artist: ")
        if(playerStringIsValid(artist)) {
            break
        }
    }

    while(TRUE) {
        ratingString <- playerinput("Enter your rating: ")
        tryCatch(
          {
              rating <- as.numeric(ratingString)
              # converting to as.numeric gives NA
              if(is.na(rating)) {
                  throw("")
              }
              break
          },
          error=function(err) {
              cat("Please enter a number\n")
          },
          warning=function() {
              cat("Please enter a number\n")
          }
        )
    }

    song <- PlayerSong(title=title, artist=artist, rating=rating)
    return(song)
}