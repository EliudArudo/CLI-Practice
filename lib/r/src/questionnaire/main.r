source("questionnaire/questions.r")
source("questionnaire/input_mod.r")
source("questionnaire/utility.r")

Questionnaire <- setClass(
    "Questionnaire",
    slots= c(
        questions="list",
        correctQuestions="list"
    )
)

# Definitions
setGeneric(name="initialize", def=function(self) { standardGeneric("initialize")})
setGeneric(name="debugQuestion", def=function(self, question) { standardGeneric("debugQuestion")})
setGeneric(name="printQuestion", def=function(self, index, question) { standardGeneric("printQuestion")})
setGeneric(name="fetchQuestionAtIndex", def=function(self, index) { standardGeneric("fetchQuestionAtIndex")})
setGeneric(name="popAQuestion", def=function(self) { standardGeneric("popAQuestion")})
setGeneric(name="evaluateQuestion", def=function(self, question, answer) { standardGeneric("evaluateQuestion")})
setGeneric(name="fetchUserEvaluation", def=function(self, defaultMessage, correctQuestions) { standardGeneric("fetchUserEvaluation")})
setGeneric(name="evaluateUser", def=function(self) { standardGeneric("evaluateUser")})

# Implementations
setMethod(f="initialize", signature="Questionnaire", definition=function(self) {
    cat(
            "===== DEVELOPER TRIVIA ================================================", "\n")
    cat("Hi there! We have some questions for you: ", "\n")
    cat("Please answer them without looking.", "\n")
    cat("In case you don't know the answer, it's okay to choose option (D)", "\n")
    cat("=======================================================================", "\n")
})

setMethod(f="debugQuestion", signature="Questionnaire", definition=function(self, question) {
    cat("......... ", question@tag , " ..... (" , question@answer , ") ....................", "\n")
    developerRating <- data.frame(row.names=c("frontend", "backend", "devops", "mobile"), val=c(0,0,0,0))

    for(question in self@correctQuestions) {
        tag <- question@tag
        developerRating[tag,] <- developerRating[tag,] + 1
    }

    for(i in 1:(nrow(developerRating))) {
       cat(row.names(developerRating)[i], " : ", developerRating[i,], "\n")
    }

    cat("......................................................\n")
})

setMethod(f="printQuestion", signature="Questionnaire", definition=function(self, index, question) {
    cat(index, ". ", question@statement, "\n")
    cat("\n")

    for(choice in question@choices) {
        cat(choice@letter, ") ", choice@statement, "\n")
    }

    # Debug
    # debugQuestion(self, question)
})

setMethod(f="fetchQuestionAtIndex", signature="Questionnaire", definition=function(self, index) {

    tryCatch(
        {
            question <- self@questions[i]
            return(c(self, question))
        },
        error=function() {
            return(c(self)) # test using is.null
        }
    )

})

setMethod(f="popAQuestion", signature="Questionnaire", definition=function(self) {
    tryCatch(
        {
            question <- self@questions[length(self@questions)]
            self@questions <- self@questions[-length(self@questions)]
            return(c(self, question)) # Get self from [1], [2]
        },
        error=function() {
            return(c(self))
        }
    )
})

setMethod(f="evaluateQuestion", signature="Questionnaire", definition=function(self, question, answer) {
    if(question@answer == answer)
      self@correctQuestions <- c(self@correctQuestions, question)
    return(self)
})

setMethod(f="fetchUserEvaluation", signature="Questionnaire", definition=function(self, defaultMessage, correctQuestions) {
   fetchUserEvaluationFn(defaultMessage, correctQuestions)
})


setMethod(f="evaluateUser", signature="Questionnaire", definition=function(self) {
   defaultMessage <- "You're a great developer, keep pushing!"

   message <- fetchUserEvaluation(self,defaultMessage, self@correctQuestions)
   cat(message, "\n")
})


prepareQuestions <- function() {
    # R copies all elements to new memory allocation
   frontendQuestionsCopy <- frontendQuestions 
   backendQuestionsCopy <- backendQuestions
   devopsQuestionsCopy <- devopsQuestions
   mobileQuestionsCopy <- mobileQuestions

   initArray <- c()

   initArray[[1]] <- frontendQuestionsCopy
   initArray[[2]] <- backendQuestionsCopy
   initArray[[3]] <- devopsQuestionsCopy
   initArray[[4]] <- mobileQuestionsCopy

   questions <- c()

   while(length(initArray) != 0) {
      randomIndex <- Random.randint(1, length(initArray))

      if(length(initArray[[randomIndex]]) == 0) {
          initArray <- initArray[-randomIndex]
      } else {
          question <- initArray[[randomIndex]][length(initArray[randomIndex])]
          initArray[[randomIndex]] <- initArray[[randomIndex]][-length(initArray[randomIndex])]
          questions <- c(questions, question)
      }
   }

   return(questions)
}

questionnaire.display <- function() {
    questions <- prepareQuestions()
    questionnaire <- Questionnaire(questions=questions)

    initialize(questionnaire)

    index <- 1

    while(index != length(questions)) {
        cat("\n")
        popQuestion <- popAQuestion(questionnaire)
        # Using '[]' to index does not cut it, it returns a list from a vector
        questionnaire <- popQuestion[[1]]
        
        tryCatch(
            {
                question <- popQuestion[[2]]

                printQuestion(questionnaire, index, question)
                answer <- questionnaireGetSelection()

                if(answer == "A" || answer == "B" || answer == "C" || answer == "D") {
                questionnaire <- evaluateQuestion(questionnaire, question, answer) 
                } else if (answer == "Q") {
                    break
                } else {
                    cat("\nYour choice was invalid, please try again\n")
                    next
                }

                index <- index + 1
            },
            error=function(err) {
                next
            }
        )
    }

    evaluateUser(questionnaire)
}