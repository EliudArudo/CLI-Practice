####################################################
questionnaireInput <- function(prompt) {
    selection <- ""

    tryCatch(
        {
         cat(prompt)  
         selection <- readLines("stdin",n=1)  
        },
        error=function(err) {
            selection <- ""
        },
        finally=function() {
            return(selection)
        }
    )
}
####################################################

questionnaireGetSelection <- function() {
    cat("==================================", "\n")
    selection <- questionnaireInput("Enter your choice (Q to quit): ")
    selection <- toupper(selection)
    return(selection)
}
