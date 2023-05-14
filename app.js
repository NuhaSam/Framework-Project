const express = require('express')
const createError = require('http-errors')
const app = express();
const routes = require('./routes')

routes(app);

app.use((req, res, next) => {
    next(createError(404));
})

app.use((error, req, res, next) => {
    console.log(error)
    res.status(error.statusCode).json({
        status: false,
        message: error.message
    })
})

module.exports = app