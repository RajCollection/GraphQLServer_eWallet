const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    kycID:{
        type: String,
        required: true
    },
    kycStatus:{
        type: String,
        required: true
    },
    aadhar:{
        type: String,
        required: true
    },
    passport:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    aadharStatus:{
        type: String,
        required: true
    },
    passportStatus:{
        type: String,
        required: true
    },
    addressStatus:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Customer', customerSchema);