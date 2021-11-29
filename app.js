const express = require("express")
require('dotenv').config();
const cookieParser = require("cookie-parser")
const helmet = require("helmet")
const mongoose = require("mongoose")
const cors = require("cors")


const {connectionURL} = require('./config')

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());
app.use(helmet());

mongoose.connect(connectionURL ,{useNewUrlParser:true, useUnifiedTopology: true}, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("connected to database")
    }
})

const searchRouter = require('./routes/Search')
app.use('/search', searchRouter)


app.get("/", (req,res) => {
    res.send("somehow worked")
});


app.listen(port, () => console.log(`listening on port ${port}`));