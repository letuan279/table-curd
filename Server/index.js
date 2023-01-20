const express = require('express')
const app = express()
const PORT = 5000
const route = require('./route')
const cors = require('cors')
const connection = require('./database')

app.use(cors())

connection.connect(function (err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + connection.threadId);
});


app.use('/api', route)
app.listen(PORT, () => console.log("Server running in port " + PORT))

