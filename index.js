const express = require('express');
const cors = require('cors');
const app = express();
 
app.use(cors());
app.use(express.json());
app.listen(3333);

app.send("/", "hello world")

console.log ("system running")