const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    Category: {
        type: String, 
        required: true
    },
    title:{
        type:String,
        required:true
    }
   
});

module.exports = mongoose.model('Cetegory', schema); 