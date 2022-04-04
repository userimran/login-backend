import bodyParser from "body-parser";
import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import route from './route/route.js';

const app = express();
const PORT = 8000;

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())

app.use('/users', route);

const DB_URL = 'mongodb+srv://root:rootpassword@cluster0.jmvdc.mongodb.net/crud?retryWrites=true&w=majority';

mongoose.connect(DB_URL, { useNewUrlParser:true, useUnifiedTopology:true }).then( ()=>{
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT} 👍👍`)
    })
}).catch((error) =>{
    console.log('Error',error.message)
})



