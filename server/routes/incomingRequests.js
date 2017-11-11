const express = require('express');
const router = express.Router();
const db = require('../utils/databaseUtils');
const logger = require('../helpers/logger');


router.get('/requests', (req, res) => {
    db.listIncomingRequests().then(data => res.send(data));
});

router.post('/requests', (req, res) => {
    logger.trace(new Date, req.body);
    db.createIncomingRequest(req.body).then(data => res.send(data));
});

router.delete('/requests/:id', (req, res) => {
    db.deleteIncomingRequest(req.params.id).then(data => res.send(data));
});

module.exports = router;