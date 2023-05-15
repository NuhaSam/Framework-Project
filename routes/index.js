const bookRouter = require('./books')

module.exports = (app) => {
app.get('/',(req, res, next) => {
res.status(200).json({
status: true,
message: null,
})
})

app.get('/books',bookRouter)

}
