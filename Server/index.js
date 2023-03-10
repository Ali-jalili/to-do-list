const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const cors = require('cors')



const app = express();

app.use(express.json());


const PORT = process.env.PORT || 5500;

app.use(cors())

const TodoItemRoute = require('./routes/todoItem')

mongoose.connect(process.env.DB_CONNECT)
    .then(() => console.log('Database connection established'))
    .catch(error => console.log(error));


app.use('/', TodoItemRoute)

app.listen(PORT, () => console.log('listening on port'));

