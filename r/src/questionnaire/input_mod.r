####################################################
questionnaireInput <- function(prompt) {
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
####################################################

questionnaireGetSelection <- function() {
    message("==================================")
    selection <- questionnaireInput("Enter your choice (Q to quit): ")
    selection <- toupper(selection)
    return(selection)
}
