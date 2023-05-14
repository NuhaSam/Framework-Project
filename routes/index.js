const bookRouter = require('./books')

module.exports = (app) => {
app.get('/',(req, res, next) => {
res.status(200).json({
status: true,
message: null,
})
})
// الدكتور كان حاطط use بدل get بس كانت مش زابطة ف جربت get زبط routes
app.get('/books',bookRouter)

}