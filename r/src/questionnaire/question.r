QuestionnaireQuestion <- setClass(
    "QuestionnaireQuestion",
    slots= c(
        statement="character",
        choices="list",
        answer="character",
        tag="character"
    )
)