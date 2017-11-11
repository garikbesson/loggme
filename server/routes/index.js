const express = require('express');
const router = express.Router();
const incomingRequests = require('./incomingRequests');

router.use(incomingRequests);

router.get('/healthcheck', (req, res)=>{
    res.json({success: 'success'});
});

module.exports = router;