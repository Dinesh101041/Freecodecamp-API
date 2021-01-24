const quora = require('quora-api');
const express = require("express");



// create server
const app = express();

'use strict';
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port} 🔥`));


    quora.answer('What-is-JavaScript').then(answer => {
        console.log(answer);
    });

