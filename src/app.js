const express = require('express')
const router = require('./router')
const app = express()
app.use(express.json());
//use express json é para nossa api enivar json
app.use(router)

module.exports = app