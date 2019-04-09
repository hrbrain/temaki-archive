const functions = require('firebase-functions')
const express = require('express')
const auth = require('./middlewares/auth')

const app = express()

app.use(auth)
app.use(express.static(__dirname + '/static/'))

exports.app = functions.https.onRequest(app)
