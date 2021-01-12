source("src/player/song.r")
source("src/player/utility.r")

###################################################################
playerinput <- function(prompt) {
  selection <- ""

  tryCatch(
      {
         selection <- readline(prompt=prompt)   
      },
      error=function(err) {
          selection <- ""
      },
      finally=function() {
          return(selection)
      }
    )
}
###################################################################


playerGetSelection <- function() {
    message("==================================================")
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