let JWT_SECRET, JWT_EXPIRATION

if (!process.env.NODE_ENV) {
    const secrets = require('./secrets')

    JWT_SECRET = secrets.JWT_SECRET
    JWT_EXPIRATION = secrets.JWT_EXPIRATION
} else {
    JWT_SECRET = process.env.JWT_SECRET
    JWT_EXPIRATION = process.env.JWT_EXPIRATION
}

module.exports = {
    JWT_SECRET,
    JWT_EXPIRATION
}