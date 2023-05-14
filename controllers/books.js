const { dbConnection } = require('../configurations')

const getBooks = (req, res, next) => {
    const pageNum = parseInt(req.query.page);
    if (isNaN(pageNum)) {
        res.status(400).json({
            status: false,
            message: "Number of page is required"
        })
    }
const limit = 10;
   const skip = (pageNum - 1) * limit;

    dbConnection('books', async (collection) => {
        const books = await collection.find({}).skip(skip).limit(limit).toArray();
        res.json(books);
    })
}

const getBooksPageCount = (req, res, next) => {
    dbConnection('books', async (collection) => {
    const count = await collection.count({});
    const limit = 10;
    res.json({
    pages: Math.ceil(count/limit)
    })
    })
}

module.exports = {
getBooks, getBooksPageCount
}
