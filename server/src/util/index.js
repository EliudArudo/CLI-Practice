const jwt = require('jsonwebtoken')

const config = require('../config')

module.exports.getToken = (userID) => {
    const token = jwt.sign({ userID }, config.JWT_SECRET,
        { expiresIn: config.JWT_EXPIRATION })

    return token
}

module.exports.verifyToken = (token) => {
    try {
        const unfurledToken = jwt.verify(token, config.JWT_SECRET)
        return unfurledToken

    } catch (e) {
        return ''
    }
}

