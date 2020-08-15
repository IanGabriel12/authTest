const jwt = require('jsonwebtoken')
const authConfig = require('../config/auth.json')

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader){
        return res.status(401).send({error: 'Missing token'})
    }

    const tokenParts = authHeader.split(' ')
    
    if (tokenParts.length !== 2) {
        return res.status(401).send({error: 'Malformatted token'})
    }

    const [ tokenHeader, token ] = tokenParts

    if (!/^Bearer$/i.test(tokenHeader)) {
        return res.status(401).send({error: 'Wrong token header'})
    }

    jwt.verify(token, authConfig.secret, {}, (error, decoded) => {
        if (error){
            return res.status(401).send({
                error: 'Invalid token'
            })
        }

        req.loggedUser = decoded

        next()
    })
}