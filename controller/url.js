const shortid = require('shortid');
// databse me insert bhi krna h toh uske bhi require kr lete h 
const URL = require('../models/url');
async function handleGenerateNewShortURL(req, res){
    const body = req.body;
    if(!body.url)
        return res.status(400).json({ error: 'url is required'});

    const shortId = shortid();
    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: [],

    })

    return res.status(201).json({id: shortId,
        createdAt: newURL.createdAt
    });
}

async function handleGetAnalytics (req, res){
    const shortId = req.params.shortId;
    const result = await URL.findOne({shortId});
    return res.json({totalClicks : result.visitHistory.length, Analytics: result.visitHistory});
}

module.exports ={
    handleGenerateNewShortURL, 
    handleGetAnalytics,
}