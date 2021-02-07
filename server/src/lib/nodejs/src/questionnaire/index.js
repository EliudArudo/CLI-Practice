const { random, fetchUserEvaluation } = require("./utility")
const { frontendQuestions, backendQuestions, devopsQuestions, mobileQuestions } = require("./questions")
const { getSelection } = require("./inputMod")

class Questionnaire {
    constructor(questions, fetchUserEvaluation) {
        this.questions = questions
        this.correctQuestions = []
        this.fetchUserEvaluation = fetchUserEvaluation
    }

    initialize() {
        console.log(
            "===== DEVELOPER TRIVIA ========================")
        console.log("Hi there! We have some questions for you: ")
        console.log("Please answer them without looking.")
        console.log("In case you don't know the answer, it's okay to choose option (D)")
        console.log("===============================================")
    }

    debugQuestion(question) {
        console.log("......... " + question.tag + " ..... (" +
            question.answer + ") ....................")

        const developerRating = {
            frontend: 0,
            backend: 0,
            devops: 0,
            mobile: 0
        }

        for (const question of this.correctQuestions) {
            const tag = question.tag
            developerRating[tag] += 1
        }

        for (const key in developerRating)
            console.log(`${key} : ${developerRating[key]}`)

        console.log("......................................................")
    }

    printQuestion(index, question) {
        console.log(`${index}. ${question.statement}`)
        console.log("")

        for (const choice of question.choices)
            console.log(`${choice.letter}) ${choice.statement}`)

        // Debug
        // this.debugQuestion(question)
    }

    fetchQuestionAtIndex(index) {
        return this.questions[index]
    }

    popAQuestion() {
        return this.questions.pop()
    }

    evaluateQuestion(question, answer) {
        if (question.answer === answer)
            this.correctQuestions.push(question)
    }

    evaluateUser() {
        const defaultMessage = "You're a great developer, keep pushing!"

        const message = this.fetchUserEvaluation(defaultMessage, this.correctQuestions)
        // Leave this here!
        console.log(message)
    }
}

function prepareQuestions() {
    let frontendQuestionsCopy = [...frontendQuestions]
    let backendQuestionsCopy = [...backendQuestions]
    let devopsQuestionsCopy = [...devopsQuestions]
    let mobileQuestionsCopy = [...mobileQuestions]

    let initArray = [frontendQuestionsCopy, backendQuestionsCopy, devopsQuestionsCopy, mobileQuestionsCopy]

    let questions = []

    let randomIndex

    while (initArray.length != 0) {
        randomIndex = random.randint(0, initArray.length - 1)

        if (initArray[randomIndex].length == 0)
            initArray.pop(randomIndex)
        else {
            const question = initArray[randomIndex].pop()
            questions.push(question)
        }
    }

    return questions
}

module.exports.display = async function (input) {
    const questions = prepareQuestions()
    const questionnaire = new Questionnaire(questions, fetchUserEvaluation)

    questionnaire.initialize()

    let index = 1

    while (true) {
        console.log("")
        const question = questionnaire.popAQuestion()

        if (question) {
            questionnaire.printQuestion(index, question)
            const answer = await getSelection(input)

            if (answer == "A" || answer == "B" || answer == "C" || answer == "D")
                questionnaire.evaluateQuestion(question, answer)
            else if (answer == "Q")
                break
            else {
                console.log("\nYour choice was invalid, please try again")
                continue
            }

        } else
            break

        index++
    }

    questionnaire.evaluateUser()
}