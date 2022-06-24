const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://koreasledo:tjdrudTJ915!@react-blog.10ao1.mongodb.net/?retryWrites=true&w=majority', 
    { useNewUrlParser: true }).then(() => console.log('DB connected'))
                                .catch(err => console.log(err));

app.get('/', (req,res) => {
    res.send('hello world')
});

app.listen(5000);