module.exports.verifyToken = async function (req, res, next) {
    try {

        next()
    } catch (e) {
        res.status(401).send('Invalid request')
    }
}


module.exports.attachIDToToken = async function (req, res, next) {
    try {

        next()
    } catch (e) {
        res.status(401).send('Invalid request')
    }
}