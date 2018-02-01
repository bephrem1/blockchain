const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Define the database schema by passing in object with keys and values for each field containing info about the attribute
const InfoSchema = new Schema({
    field1: {
        type: String,
        required: true,
        trim: true
    },
    field2: {
        type: String,
        required: true,
        trim: true
    },
    field3: {
        type: String,
        required: true,
        trim: true
    }
});

const Info = mongoose.model('Info', InfoSchema); //Create model named 'Info' using UserSchema
module.exports = Info; //Export the Info object now with a schema defined above
