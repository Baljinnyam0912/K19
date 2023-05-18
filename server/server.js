

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bp = require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bp.json())



app.get('/', (req, res) => {
    res.json({message: "REST API amjilttai ajillaa shuu huuhdee"})
})


mongoose.connect(process.env.MONGO_PATH)
        .then(() => {
            app.listen(process.env.port, () => {
                console.log(process.env.port)
            })
        })
        .catch(err => console.log(err))