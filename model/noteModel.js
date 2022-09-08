const mongoose  = require("mongoose");

const noteSchema = new mongoose.Schema({
   key:{
     type:Number
   },
    title:{
      type:String,
      required:true
    },
    content:{
      type:String,
      required:true
    },
    date:{
      type:Date,
      default:Date.now
    }
})

const Notes = mongoose.model("Notes", noteSchema);

module.exports = Notes;
