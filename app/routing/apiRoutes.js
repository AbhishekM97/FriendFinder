var friendsData = require("../data/friends");

module.exports = function(app){
    
    app.get("/api", function(req, res){
        res.json(friendsData);
    });
    
    app.post("/api/friends", function(req, res){

        friendsData.push(req.body);
        console.log("\ncurrent user is " + req.body.name);

        var UserInfo = req.body;
        var userScores = UserInfo.score;
        var Leastdifference;
        var mostCompatiable;

        console.log("\n User's scores for survey: " + userScores);

        for(var i =0; i<friendsData.length; i++){
            var difference=0;
            var check = friendsData[i];

            //console.log(i);
           //console.log(check);

            for(var j=0; j<userScores.length; j++){
                if(check.name !== UserInfo.name){
                difference += Math.abs(check.score[j]-userScores[j]);
                }
                else{
                    continue;
                }
            }

            console.log(difference);

            if(i === 0){
            Leastdifference = difference;
            mostCompatiable = check;
            }

            else if(difference<Leastdifference){
                Leastdifference = difference;
                mostCompatiable = check;
            }
            
            else{
              continue;
            }
        }
        console.log("\n");
        console.log(friendsData);
        res.json(mostCompatiable);
    });



};

/*algorithm to see most compatible friend.
store the most current user into a variable.
for each object in friendsData array,
get the score difference between current user and the index of friendsData array.
store difference for first iteration and if the score of the ascending iteration is less than the current value,
store the lesser value in the variable. 
when you store the least difference value also store that array index's object in a most compatiable user variable.
*/