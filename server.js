const express = require('express');

const app = express();
app.get('/', (req, res) => res.send('Hola'))



app.listen(3000)
console.log("Server listening on prot 3000")