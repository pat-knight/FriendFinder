const database = require('../data/friends');
const route = require('express').Router();
var members = [];
var jsonMembers = [];

    //send JSON of all possible friends
    route.get('/friends', (req, res) => {
        res.json(database);
    });

    route.post('/friends', (req, res) => {
        let newMember = JSON.stringify(req.body);
        console.log(`\napiRoutes 12 ${newMember}`);
        members.push(JSON.stringify(database));
        console.log(`\n15 ${members}`);
        if (newMember) {
            members.push(newMember);
            findMatch(newMember);
        } else {
            res.send('Data not found');
        }
        
        //handle incoming survey results and handle compatibility logic
        // var updateMembers = {
        //     name: newMember.name,
        //     photo: newMember.photo,
        //     profile: newMember.profile
        // }
        // res.json(updatemembers);

        function findMatch(newMember) {
            let total = [];
            // var total = 0;
            // console.log(`\n34${members[0]}`) //can't figure out why this outputs the entire object
            for (var i = 0; i < members.length-1; i++) {
                JSON.stringify(members[i]);
                // console.log(`\n35${members[i]}`);
                let compare = []
                let currentMember = members[i].profile;
                // total = 0;
                for (var j = 0; j < currentMember.length; j++){
                    commpare.push(Math.abs(currentMember[j] - newMember.profile[j]));
                    compare.push(total);
                }
                total.push(compare.reduce((accumulator, currentValue) => accumulator + currentValue))
                console.log(`apiRoutes 39 ${total}`);
                // return Math.min(...compare);
            }
            
            let findMin = Math.min(...total);
            let match = {
                name: members[total.indexOf(findMin).name],
                photo: members[total.indexOf(findMin).photo],
            }
            console.log(`apiRoutes 51 ${match}`);
            res.send(match);
            // members.forEach(member => {
            //     if (member.name !== newMember.name) {
            //         let currentProfile = newMember.profile.map((answer, index) => {
            //             return Math.abs(member.profile[index] - answer);
            //         })
            //     }
            // })
        
            // database.then(members => {
            //     members.forEach(member => {
            //         if (member.name !== newMember.name) {
            //             let currentProfileSum = newMember.profile.map((answer, index) => {
            //                 return Math.abs(member.profile[index] - answer);
            //                 // return Math.abs(member.profile[index] - answer);
            //             })
            //         }
            //     });
            // })
        }
    });



module.exports = route;
