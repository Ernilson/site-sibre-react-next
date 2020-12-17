const express = require("express");
const path = require("path");
const app = express();

var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});


