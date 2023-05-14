const { Router } = require('express')
const { bookController } = require('../controllers')

const router = Router();

router.get('/books', bookController.getBooks).get('/pages', bookController.getBooksPageCount)

module.exports = router