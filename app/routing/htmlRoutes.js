const path = require('path');
const route = require('express').Router();

//if GET /survey 


route.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/survey.html'));
});

//catchall and send to home page
route.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));    
});

module.exports = route;