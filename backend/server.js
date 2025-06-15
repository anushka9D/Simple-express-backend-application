const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

app.use(express.json())

//middleware

//routes
app.use('/api',require("./routes/userRoute"));

mongoose.connect(process.env.mongodb)
    .then(()=>{
        console.log("mongoo db url connected");
        app.listen(process.env.PORT);
        console.log(`app running in port ${process.env.PORT}`);
    })
    .catch((err)=>{
        console.log(err);
    })