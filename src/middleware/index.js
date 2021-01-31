const Util = require('../util')

module.exports.verifyToken = async function (req, res, next) {
    try {

        const { token } = req.params
        await Util.verifyToken(token)

        next()
    } catch (e) {
        res.status(401).send('Invalid request')
    }
}


module.exports.attachIDToToken = async function (req, res, next) {
    try {

        const { token } = req.params
        const { userID } = await Util.verifyToken(token)

        req.body.userID = userID

        next()
    } catch (e) {
        res.status(401).send('Invalid request')
    }
}