//--------------------Configure Express, routes----------------------
const express = require("express");
const path=require('path')
const app=express()
// app.use(express.static(__dirname+'/public'));
// app.use('views',express.static(path.join(__dirname,'views')));
// app.set('view engine','hjs');
const PORT=process.env.PORT || 5000;

const homeRoutes=require('./routes/home')
app.use('/home',homeRoutes);



//--------------------Configure MongoDB And Mongoose----------------------
const mongoose = require("mongoose");

//implement mongoDB atlas connection string
const DriverString = "mongodb://localhost:27017/meloverse";
mongoose
  .connect(DriverString)
  .then((data) => console.log("Yay, MongoDB connection success"))
  .catch((err) => console.log("Oh no, MongoDB connection error:", err.message));





app.all("*", (req, res) => {
  res.status(404).send("<h1>404: Not Found</h1>");
});

const server=app.listen(PORT,()=>{
  console.log(`server running on port ${server.address().port}`);
  console.log(`http://localhost:${server.address().port}`);
})

