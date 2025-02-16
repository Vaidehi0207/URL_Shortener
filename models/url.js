const mongoose = require('mongoose');

// pehle ek schema banate h 
const urlSchema = new mongoose.Schema({
    shortId: {
        type: String, 
        required: true,
        unique: true,
    },

    redirectURL:{
        type: String,
        required: true,
    },
    // visitHistory ek array h jisme visit ki history store hogi aur usme objects honge
    visitHistory: [ { timeStamp: {type: Number } }],
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",

    }
},
    {timestamps: true},
)

// const url = mongoose.model('url', urlSchema);

module.exports = mongoose.model('url', urlSchema);
