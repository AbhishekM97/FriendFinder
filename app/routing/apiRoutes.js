var friendsData = require("../data/friends");

module.exports = function(app){
    
    app.get("/api", function(req, res){
        res.json(friendsData);
    });
    
    app.post("/api/friends",function(req, res){
        friendsData.push(req.body);
        console.log(friendsData);
        res.json(true);
    })
};