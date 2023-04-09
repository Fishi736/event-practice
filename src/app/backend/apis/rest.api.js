
const express = require('express');
const router = express.Router();
const fs = require('fs');

const EventCollection = require('../models/event');

router.post('/addevent', (req, res) => {
    let eve = new EventCollection(req.body);
    eve.save();
    res.status(201).send(eve);



});
router.get('/eventsList', async (req, res) => {
    let data = await EventCollection.find({})
    let download = req.query.download
    if (download == 'true') {
        fs.writeFile('./download/test.txt', JSON.stringify(data), { flag: 'a+' }, err => {
            if (err) {
                console.error(err);
            } else {
                console.log('file written successfully');
            }
            // file written successfully
        });

    } else {
        res.json(data);
        res.status(200);
    }





});


module.exports = router;