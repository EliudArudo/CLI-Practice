Option <- setClass(
    "Option",
    slots = c(
        index="numeric",
        title="character"
    )
)

# Definitions
setGeneric(name="printOption", def=function(self) { standardGeneric("printOption") })

# Implementations
setMethod(f="printOption", signature="Option", definition=function(self) {
    message(self@index, ". ", self@title)
})