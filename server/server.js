const express = require('express');
const cors = require('cors')
const db = require('./connection.js')

const app = express();
app.use(cors())
db()
app.listen(8080, () => {
 console.log("Server started on port 8080")
});

