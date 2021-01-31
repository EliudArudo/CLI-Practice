PlayerChoice <- setClass(
    "PlayerChoice",
    slots = c(
        letter="character",
        statement="character"
    )
)

# Definitions
setGeneric(name="fetchStatement", def=function(self) { standardGeneric("fetchStatement")})
setGeneric(name="fetchLetter", def=function(self) { standardGeneric("fetchLetter")})

# Implementations
setMethod(f="fetchStatement", signature="PlayerChoice", definition=function(self) {
    return(self@statement)
})

setMethod(f="fetchLetter", signature="PlayerChoice", definition=function(self) {
    return(self@letter)
})