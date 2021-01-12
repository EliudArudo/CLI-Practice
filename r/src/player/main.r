source("src/player/input_mod.r")
source("src/player/choice.r")
source("src/player/song.r")

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
        message(choice@letter, " - ", choice@statement)
    }
    return(self)
})

setMethod(f="printCurrentSong", signature="Player", definition=function(self) {
    if(length(self@playlist) == 0) {
        message("No song playing currently")
        return(self)
    }
    message("Playing:")
    song <- self@playlist[[self@cursor]]
    printSong(song)
    return(self)
})

setMethod(f="playFirstSong", signature="Player", definition=function(self) {
    message("Playing first song")
    self@cursor <- 1
    printCurrentSong(self)
    return(self)
})

setMethod(f="playNextSong", signature="Player", definition=function(self) {
    nextCursor <- self@cursor + 1
    if(nextCursor >= length(self@playlist)) {
      message("Wrapping to start of playlist")
      self@cursor <- 1
    } else {
      self@cursor <- nextCursor 
    }
    message("Playing next song")
    printCurrentSong(self)
    return(self)
})

setMethod(f="playPreviousSong", signature="Player", definition=function(self) {
    previousCursor <- self@cursor - 1
    if(previousCursor == 0) {
       message("Wrapping to end of playlist")
       self@cursor <- length(self@playlist) 
    } else {
        self@cursor <- previousCursor
    }
    message("Playing previous song")
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
        message("No songs in the current playlist")
        return(self)
    }

    for(song in self@playlist) {
        printSong(song)
    }
    
    message("\nCurrent: ")
    # message("self@cursor: ", self@cursor)
    song <- self@playlist[[self@cursor]]
    printSong(song)
    return(self)
})



player.display <- function() {
  message("===== MUSIC PLAYER ===============================")

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
     message("")
     player <- printMenu(player)
     selection <- playerGetSelection()
     message("")

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
         message("Didn't get that, please try again")
     }
  }
}



