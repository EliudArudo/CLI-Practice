const isDevelopment = !process.env.NODE_ENV

const MONGO_URI = isDevelopment ?
    require("./secrets").MONGO_URI :
    process.env.MONGO_URI

const JWT_SECRET = isDevelopment ?
    require("./secrets").JWT_SECRET :
    process.env.JWT_SECRET

const JWT_EXPIRATION = isDevelopment ?
    require("./secrets").JWT_EXPIRATION :
    process.env.JWT_EXPIRATION

const PRS_HANDSHAKE = isDevelopment ?
    require("./secrets").PRS_HANDSHAKE :
    process.env.PRS_HANDSHAKE



module.exports = {
    MONGO_URI,

    JWT_SECRET,
    JWT_EXPIRATION,

    PRS_HANDSHAKE
}