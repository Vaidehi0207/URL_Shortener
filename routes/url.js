const express = require('express');

const { handleGenerateNewShortURL, handleGetAnalytics } = require('../controller/url');
const { model } = require('mongoose');
const router = express.Router();

// POST/url : Create a new short URL and returns the shortened url 
router.post('/', handleGenerateNewShortURL);

router.get('/analytics/:shortId' , handleGetAnalytics)

module.exports = router;
