playerPrintWithBuffer <- function(string, bufferLength) {
    buffer <- ""

    for(i in 1:bufferLength) {
        if( i <= nchar(string)) {
           buffer <- paste(buffer, substr(string, i, i), sep='')
        } else {
            buffer <- paste(buffer, " ", sep='')
        }
    }
    
    return(buffer)
}

playerStringIsValid <- function(string) {
    return(nchar(string) > 0)
}

playerPrintFieldErrorMessage <- function() {
    print("Please try again, invalid input")
}