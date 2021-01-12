Random.randint <- function(min, max) {
   if(max == 0) {
       return(max)
   }

   return(floor(runif(1, min=min, max=max)))
}

questionnaireStringIsValid <- function(string) {
    return(nchar(string) > 0)
}

questionnairemessageFieldErrorMessage <- function() {
    message("Please try again, invalid input")
}

fetchUserEvaluationFn <- function(defaultMessage, correctQuestions) {
    message <- ""

    developerRating <- data.frame(row.names=c("frontend", "backend", "devops", "mobile"), val=c(0,0,0,0))

    for(question in correctQuestions) {
        tag <- question@tag
        developerRating[tag,] <- developerRating[tag,] + 1
    }

    frontend <- "frontend"
    backend <- "backend"
    devops <- "devops"
    mobile <- "mobile"

    passingLimit <- 3
    failureLimit <- 2    
   

    isFrontendDeveloper <- developerRating[frontend,] > failureLimit && developerRating[backend,] <= failureLimit && developerRating[devops,] <= failureLimit && developerRating[mobile,] <= failureLimit

    isBackendDeveloper <- developerRating[frontend,] <= failureLimit && developerRating[backend,] > failureLimit && developerRating[devops,] <= failureLimit && developerRating[mobile,] <= failureLimit

    isDevopsEngineer <- developerRating[frontend,] < failureLimit && developerRating[backend,] < failureLimit && developerRating[devops,] > failureLimit && developerRating[mobile,] < failureLimit

    isMobileDeveloper <- developerRating[frontend,] < failureLimit && developerRating[backend,] < failureLimit && developerRating[devops,] < failureLimit && developerRating[mobile,] > failureLimit

    isFullStackDeveloper <- developerRating[frontend,] > failureLimit && developerRating[backend,] > failureLimit && developerRating[devops,] < failureLimit

    isSoftwareEngineer <- developerRating[frontend,] > failureLimit && developerRating[backend,] > failureLimit && developerRating[devops,] >= failureLimit

    isAllRounder <- developerRating[frontend,] >= failureLimit && developerRating[backend,] >= failureLimit && developerRating[devops,] >= failureLimit && developerRating[mobile,] >= failureLimit

    # message("frontend developer: ",isFrontendDeveloper)
    # message("backend developer: ",isBackendDeveloper)
    # message("devops developer: ",isDevopsEngineer)
    # message("mobile developer: ",isMobileDeveloper)
    # message("fullstack developer: ",isFullStackDeveloper)
    # message("software engineer: ",isSoftwareEngineer)
    # message("all rounder: ",isAllRounder)

    if (isAllRounder) {
        message <- "WOW! Looks like we got an all rounder, congratulations!!!"
    }
    else if (isSoftwareEngineer) {
        message <- "You're definitely a Software engineer :-)"
    }
    else if (isFullStackDeveloper) {
        message <- "Congratulations, Oh Fullstack developer!"
    }
    else if (isDevopsEngineer) {
        message <- "You're definitely a DevOps engineer"
    }
    else if (isMobileDeveloper) {
        message <- "Looks like you are a mobile developer!"
    }
    else if (isBackendDeveloper) {
        message <- "Another great backend developer!"
    }
    else if (isFrontendDeveloper) {
        message <- "Looks like you are a frontend developer, right?"
    }
    else {
        message <- defaultMessage
    }

    message <- c(message,"\n")

    return(message)
}