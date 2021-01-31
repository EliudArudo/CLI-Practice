module.exports.random = {
    randint: (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports.stringIsValid = function (string) {
    try {
        String(string)

        if (string.length === 0)
            return false

        return true
    } catch (e) {
        return false
    }
}

module.exports.printFieldErrorMessage = function () {
    console.log("Please try again, invalid input")
}

module.exports.fetchUserEvaluation = function (defaultMessage, correctQuestions) {
    let message

    const developerRating = {
        frontend: 0,
        backend: 0,
        devops: 0,
        mobile: 0
    }

    for (const question of correctQuestions) {
        const tag = question.tag
        developerRating[tag] += 1
    }

    const frontend = "frontend"
    const backend = "backend"
    const devops = "devops"
    const mobile = "mobile"

    passingLimit = 3
    failureLimit = 2

    isFrontendDeveloper = developerRating[frontend] > failureLimit && developerRating[backend] <= failureLimit && developerRating[devops] <= failureLimit && developerRating[mobile] <= failureLimit

    isBackendDeveloper = developerRating[frontend] <= failureLimit && developerRating[backend] > failureLimit && developerRating[devops] <= failureLimit && developerRating[mobile] <= failureLimit

    isDevopsEngineer = developerRating[frontend] < failureLimit && developerRating[backend] < failureLimit && developerRating[devops] > failureLimit && developerRating[mobile] < failureLimit

    isMobileDeveloper = developerRating[frontend] < failureLimit && developerRating[backend] < failureLimit && developerRating[devops] < failureLimit && developerRating[mobile] > failureLimit

    isFullstackDeveloper = developerRating[frontend] > failureLimit && developerRating[backend] > failureLimit && developerRating[devops] < failureLimit

    isSoftwareEngineer = developerRating[frontend] > failureLimit && developerRating[backend] > failureLimit && developerRating[devops] >= failureLimit

    isAllRounder = developerRating[frontend] >= failureLimit && developerRating[backend] >= failureLimit && developerRating[devops] >= failureLimit && developerRating[mobile] >= failureLimit

    // console.log("frontend developer: " + isFrontendDeveloper)
    // console.log("backend developer: " + isBackendDeveloper)
    // console.log("devops developer: " + isDevopsEngineer)
    // console.log("mobile developer: " + isMobileDeveloper)
    // console.log("fullstack developer: " + isFullstackDeveloper)
    // console.log("software engineer: " + isSoftwareEngineer)
    // console.log("all rounder: " + isAllRounder)

    if (isAllRounder)
        message = "WOW! Looks like we got an all rounder, congratulations!!!"
    else if (isSoftwareEngineer)
        message = "You're definitely a Software engineer :-)"
    else if (isFullstackDeveloper)
        message = "Congratulations, Oh Fullstack developer!"
    else if (isDevopsEngineer)
        message = "You're definitely a DevOps engineer"
    else if (isMobileDeveloper)
        message = "Looks like you are a mobile developer!"
    else if (isBackendDeveloper)
        message = "Another great backend developer!"
    else if (isFrontendDeveloper)
        message = "Looks like you are a frontend developer, right?"
    else
        message = defaultMessage

    message += "\n"

    return message
}