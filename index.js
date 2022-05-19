
(async () => {
    const express = require("express");
    const app = express();
    const bodyParser = require('body-parser');
    const compression = require('compression')
    const controller = require('./controller')
    require('dotenv').config()


    app.use(compression())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));



    const port = process.env.PORT
    app.post("/email-send", controller.sendEmail)
    app.listen(port, () => {
        console.log("Server has started!")
    });
    module.exports = app
})()