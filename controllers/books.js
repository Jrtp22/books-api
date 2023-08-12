const router = require('express').Router()
const db = require('../models')
const seedData = require('../seeders/book-seeds')

router.get('/data/seed', (req, res) => {
    Books.insertMany(seedData).then(() => {
        res.json(seedData)
    })
})

router.get('/', async (req, res) => {
    try{
        const foundbooks = await Books.find({})
        res.send(foundbooks)
    } catch(err) {
        res.status(500).json(err);
        res.sendStatus(500)
    }
})

router.get(':id', (req, res) => {
    res.send('one books')
})

router.get('/new', (req, res) => {
    
})
//edit
router.put('/:id', async (req, res) => {
    try{
        await Books.findByIdAndUpdate(req.params.id, req.body)
        res.sendStatus(200)
    } catch(err) {
        console.error(err);
        res.sendStatus(500)
    }
})

router.get('/:id/edit', (req, res) => {
    res.send('EDIT /books')
})

router.post ('/', async (req, res) => {
    console.log(req.body)
    try{
        await Books.create(req.body)
        res.sendStatus(200)
    } catch(err) {
        console.error(err);
    }
})

router.delete('/:id', async(req, res) => {
    try{
        await Books.findByIdAndDelete(req.params.id)
        res.sendStatus(200)
    } catch(err) {
        console.error(err);
        res.sendStatus(500)
    }
})
module.exports = router
