const express = require('express');
var bodyParser = require('body-parser')
const cors = require('cors');
const mongoose = require('mongoose');

const db = "mongodb+srv://dbUser:11NOQEZkDOkvB24C@cluster0.yxgst.mongodb.net/?retryWrites=true&w=majority"
const PORT = 3000
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('connected to  db ')
}).catch((e) => {
    console.log(e)
})

const app = express();
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const myapi = require('./src/app/backend/apis/rest.api');
app.use('/', myapi);


app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, () => {
    console.log(`Listening to : ${PORT}`);
});