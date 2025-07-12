const mongoose = require('mongoose');


const personSchema = new mongoose.Schema({
    name:{
    type: String,
    required: true
    },
    age:{
        type: Number,
    },
    work:{
        type: String,
        enum: ['Chef', 'waiter', 'manager'],
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
    },
    salary:{
        type:Number,
        required: true,
    },
})

const person = mongoose.model('person',personSchema);
module.exports = person;
