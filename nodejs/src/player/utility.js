module.exports.printWithBuffer = function (string, bufferLength) {
    let buffer = ""

    for (let i = 0; i < bufferLength; i++)
        if (i < string.length)
            buffer += string[i]
        else
            buffer += " "

    return buffer
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