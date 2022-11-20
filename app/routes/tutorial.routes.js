module.exports = app1 => {
    const tutorials = require("../controllers/tutorial.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", tutorials.create);
    app1.use('/api/tutorials', router);

}