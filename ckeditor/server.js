const express = require('express');

const app = express();

app.use(express.static('public'));

app.listen(4138, () => console.log('Server running: http://localhost:4138'));
