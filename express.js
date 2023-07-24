const express = require('express');
const app = express()
const cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:63342'}));
const PORT = 3000;

// For parsing application/json
app.use(express.json());


app.post('/order', function (req, res) {
    console.log(req.body);
    res.send();
});

app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});