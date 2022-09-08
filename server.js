require("dotenv").config();
const express = require("express");
const mongoose  = require("mongoose");
const cors = require("cors");
const noteRoute = require("./routes/noteRoute");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/', noteRoute);

const host = '0.0.0.0';
app.listen(process.env.PORT||5000,host, ()=> {
    console.log("connected");
})

const URI = process.env.MONGODB_URL;
mongoose.connect(URI, (err,db)=>{
  if(err) throw err;
  console.log("connected to mongodb");

})

if(process.env.NODE_ENV ==='production'){
  app.use(express.static('noteit/public'));
  app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,'noteit','public','index.html'))
  });
}
