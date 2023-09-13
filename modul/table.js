const mongoose = require("mongoose");
// const schema = mongoose.Schema
const {Schema} = mongoose

var tableStructure = new Schema({
    title:{type : String},
    description:{type : String}
},
{date : true})

var employee = mongoose.model("prem",tableStructure)

module.exports = employee;

