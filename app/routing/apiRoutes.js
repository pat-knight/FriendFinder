var members = [];
const database = require('../data/friends');

module.exports = function(app) {

    //send JSON of all possible friends
    app.get('/api/friends', (req, res) => {
        res.json(members);
    });

    app.post('/data/friends', (req, res) => {
        let newMember = req.body;
        if (newMember) {
            members.push(newMember.body);
            findMatch(newMember);
        }
        
        //handle incoming survey results and handle compatibility logic
        var updateMembers = {
            name: newMember.name,
            photo: newMember.photo,
            profile: newMember.profile
        }
        res.json(updatemembers);
    });
}

function findMatch(newMember) {
    database().then(members => {
        members.forEach(member => {
            if (member.name !== newMember.name) {
                let currentProfileSum = newMember.profile.map((answer, index) => {
                    return Math.abs(member.profile[index] - answer);
                })
            }
        });
    })
}
