// branch.model.js
const mongoose = require('mongoose');
const branchSchema = mongoose.Schema({
    // Branch schema definition
    name: {
        type: String,
        required: true,
        unique: true,
    },
    location: {
        type: String,
        required: true,
    },
    contactInfo: {
        type: String,
        required: true,
    }
});
const Branch = mongoose.model("Branch", branchSchema);
module.exports = Branch;
