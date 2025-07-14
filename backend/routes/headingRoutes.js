const express = require('express')
const router = express.Router()

const Heading = require('../models/mdels')

router.post('/heading', async (req, res) => {
    try {
        const { heading } = req.body 

        if (!heading){
            return res.status(400).json({error: 'Invalid Heading Text'})
        }

        const newHeading = await Heading.findOneAndUpdate({},
            { text: heading.trim()},
            { new: true, upsert: true}
        )

        res.status(200).json({message: 'Headline saved successfully', headline: newHeading})
    } catch (error) {
        console.error('Adding headline error', error);
        res.status(500).json({error: 'Internal server error'})
    }
})

router.get('/', async (req, res) => {
    try {
        const heading = await Heading.find()
        res.status(200).json({heading})
    } catch (error) {
        console.error('Failed to fetch headline', error);
        res.status(500).json({error: 'Internal server error'})
    }
})

module.exports = router