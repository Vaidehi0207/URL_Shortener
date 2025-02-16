const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

// A User Schema in Mongoose is a blueprint that defines the structure, properties,
//  and data types of a User document in a MongoDB database.
const userSchema = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4,
    },
    name : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },

}, 
{timestamps : true}
);


// Create a User  model based on the schema
const User = mongoose.model('user', userSchema)

module.exports = User;