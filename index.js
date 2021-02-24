const express = require('express');
const cors = require('cors');
const app = express();

require('./src/Routes/index')(app); // <--- rotas do servidor

app.use(cors());
app.use(express.json());
app.listen(3333);



console.log ("system running")