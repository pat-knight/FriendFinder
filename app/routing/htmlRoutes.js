const path = require('path');

//if GET /survey 
app.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/surveys.html'));
});

//catchall and send to home page
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.html'));    
});