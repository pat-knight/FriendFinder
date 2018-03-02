var members = [];

module.exports = function(app) {
    //send JSON of all possible friends
    app.get('/api/friends', (req, res) => {
        res.json(members);
    });

    app.post('/data/friends', (req, res) => {
        if (req.body) {
            members.push(req.body);
            findMatch();
        }
        
        //handle incoming survey results and handle compatibility logic
        var updateMembers = {
            name: req.body.name,
            photo: req.body.photo,
            profile: req.body.profile
        }
        res.json(updatemembers);
    });
}

app.get('/api/friends', (req, res) => {
    //display a JSON of all possible friends
});

app.post('/api/friends', (req, res) => {
    //handle incoming survey results and handle compatibility logic
});
