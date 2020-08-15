const express = require('express')
const jwt = require('jsonwebtoken')
const authConfig = require('./src/config/auth.json')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    return res.send('Hello World')
})

app.post('/login', (req, res) => {
    const { username, password } = req.body
    
    if (username !== 'ian123'){
        return res.status(401).send({error: 'Usuário inválido'})
    }

    if (password != '123456'){
        return res.status(401).send({error: 'Senha inválida'})
    }

    const token = jwt.sign({
        username,
        password
    }, authConfig.secret, {
        expiresIn: '1 day'
    })

    return res.send({
        token,
    })
})

app.listen(3333)