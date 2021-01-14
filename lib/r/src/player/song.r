source("player/utility.r")

PlayerSong <- setClass(
    "PlayerSong",
    slots = c(
        title="character",
        artist="character",
        rating="numeric"
    )
)

# Definitions
setGeneric(name="printSong", def=function(self) { standardGeneric("printSong")})

# Implementations
setMethod(f="printSong", signature="PlayerSong", definition=function(self) {
    title <- playerPrintWithBuffer(self@title, 20)
    artist <- playerPrintWithBuffer(self@artist, 27)
    cat(title, " ", artist, " ", self@rating, "\n")
})