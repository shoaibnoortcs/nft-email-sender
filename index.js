
(async () => {
    const express = require("express");
    const app = express();
    const bodyParser = require('body-parser');
    const compression = require('compression')
    const controller = require('./controller')
    const cors = require('cors')
    require('dotenv').config()

    app.use(cors())
    app.use(compression())
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));



    const port = process.env.PORT

    app.post("/external/email-send", controller.sendEmail)
    app.listen(port, () => {
        console.log("Server has started!")
    });
    module.exports = app
})()