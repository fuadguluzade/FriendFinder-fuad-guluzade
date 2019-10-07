var friends = require('../data/friends')


const getFriends = () => {
    return friends;
}

const postFriend = friendObject => {
    var diffArray = [];
    var curUserScores = friendObject.scores;
    for (var i = 0; i < friends.length; i++) {
        var sum = 0;
        for (var j = 0; j < curUserScores.length; j++) {
            sum += Math.abs(curUserScores[j] - friends[i].scores[j]);
        }
        diffArray.push(sum);
    }
    friends.push(friendObject);
    return friends[diffArray.indexOf(Math.min(...diffArray))];
}

module.exports = {
    getFriends,
    postFriend
}