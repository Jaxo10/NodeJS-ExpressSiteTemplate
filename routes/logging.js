/**
 * Created by jacob on 8/3/17.
 */
var express = require('express');
var router = express.Router();
var currentData = { time: 'nothing', data: 'nothing'};
var bodyTest = {};

router.post('/raritan-push', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Credentials', true);
    currentData = req.body;
    res.send();
});

router.get('/raritan-get', function (req, res) {

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Credentials', true);
    res.json(bodyTest);
});
































module.exports = router;