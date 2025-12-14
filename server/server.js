import express from 'express'
import "dotenv/config";
import cors from "cors";
import { log } from 'console';
import { connect } from 'http2';
import connectDB from './configs/db.js';

connectDB();

const app =express()
app.use(cors())

app.get('/',(req,res) => res.send("API is working"))

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}
    `));