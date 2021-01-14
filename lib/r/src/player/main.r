source("player/input_mod.r")
source("player/choice.r")
source("player/song.r")

Player <- setClass(
    "Player",
    slots = c(
        # This defines the type of data expected
        # A list is a vector with unknown variables such as custom classes
        playlist="list",
        choices="list",
        cursor="numeric"
    )
)

# Definitions
setGeneric(name="printMenu", def=function(self) { standardGeneric("printMenu")})
setGeneric(name="printCurrentSong", def=function(self) { standardGeneric("printCurrentSong")})
setGeneric(name="playFirstSong", def=function(self) { standardGeneric("playFirstSong")})
setGeneric(name="playNextSong", def=function(self) { standardGeneric("playNextSong")})
setGeneric(name="playPreviousSong", def=function(self) { standardGeneric("playPreviousSong")})
setGeneric(name="addPlayNewSong", def=function(self, song) { standardGeneric("addPlayNewSong")})
setGeneric(name="listCurrentPlaylist", def=function(self) { standardGeneric("listCurrentPlaylist")})

# Implementations
setMethod(f="printMenu", signature="Player", definition=function(self) {
    for(choice in self@choices) {
        cat(choice@letter, " - ", choice@statement, "\n")
    }
    return(self)
})

setMethod(f="printCurrentSong", signature="Player", definition=function(self) {
    if(length(self@playlist) == 0) {
        cat("No song playing currently", "\n")
        return(self)
    }
    cat("Playing:", "\n")
    song <- self@playlist[[self@cursor]]
    printSong(song)
    return(self)
})

setMethod(f="playFirstSong", signature="Player", definition=function(self) {
    cat("Playing first song", "\n")
    self@cursor <- 1
    printCurrentSong(self)
    return(self)
})

setMethod(f="playNextSong", signature="Player", definition=function(self) {
    nextCursor <- self@cursor + 1
    if(nextCursor >= length(self@playlist)) {
      cat("Wrapping to start of playlist", "\n")
      self@cursor <- 1
    } else {
      self@cursor <- nextCursor 
    }
    cat("Playing next song", "\n")
    printCurrentSong(self)
    return(self)
})

setMethod(f="playPreviousSong", signature="Player", definition=function(self) {
    previousCursor <- self@cursor - 1
    if(previousCursor == 0) {
       cat("Wrapping to end of playlist", "\n")
       self@cursor <- length(self@playlist) 
    } else {
        self@cursor <- previousCursor
    }
    cat("Playing previous song", "\n")
    printCurrentSong(self)
    return(self)
})

setMethod(f="addPlayNewSong", signature="Player", definition=function(self, song) {
    self@playlist <- append(self@playlist, song, after=self@cursor - 1)
    printCurrentSong(self)
    return(self)
})

setMethod(f="listCurrentPlaylist", signature="Player", definition=function(self) {
    if(length(self@playlist) == 0) {
        cat("No songs in the current playlist", "\n")
        return(self)
    }

    for(song in self@playlist) {
        printSong(song)
    }
    
    cat("\nCurrent: ", "\n")
    # cat("self@cursor: ", self@cursor, "\n")
    song <- self@playlist[[self@cursor]]
    printSong(song)
    return(self)
})



player.display <- function() {
  cat("===== MUSIC PLAYER ===============================", "\n")

  playlist <- c(
      PlayerSong(title="God's Plan", artist="Drake", rating=5),
      PlayerSong(title="Never Be The Same", artist="Camila Cabello", rating=5),
      PlayerSong(title="Pray For Me", artist="The Weekend and K. Lamar", rating=4),
      PlayerSong(title="The Middle", artist="Zedd, Maren Morris & Grey", rating=5),
      PlayerSong(title="Wait", artist="Maroone 5", rating=4),
      PlayerSong(title="Whatever It Takes", artist="Imagine Dragons", rating=3)
  )

  choices <- c(
      PlayerChoice(letter="F", statement="Play First Song"),
      PlayerChoice(letter="N", statement="Play Next Song"),
      PlayerChoice(letter="P", statement="Play Previous Song"),
      PlayerChoice(letter="A", statement="Add and play a new song at current location"),
      PlayerChoice(letter="L", statement="List the current playlist")
  )

  # Have to initialize all variables from here
  player <- Player(playlist=playlist, choices=choices, cursor=1)
  listCurrentPlaylist(player)

  selection <- ""

  while(TRUE) {
     cat("\n")
     player <- printMenu(player)
     selection <- playerGetSelection()
     cat("\n")

     if(selection == "F") {
        # Apparently in R we need to keep track of a class object, so returning it at the end of each method
        player <- playFirstSong(player)
     }
     else if(selection == "N") {
         player <- playNextSong(player)
     }
     else if(selection == "P") {
        player <- playPreviousSong(player)
     }
     else if(selection == "A") {
        song <- playerGetSong()
        player <- addPlayNewSong(player, song)
     }
     else if(selection == "L") {
        player <- listCurrentPlaylist(player)
     }
     else if(selection == "Q") {
        break
     }
     else {
         cat("Didn't get that, please try again", "\n")
     }
  }
}



