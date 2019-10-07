var express = require('express');
var htmlRoutes = require('./routing/htmlRoutes');
var apiRoutes = require('./routing/apiRoutes');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/survey", function (req, res) {
    res.sendFile(htmlRoutes.getSurvey());
});

app.get("/api/friends", (req, res) => {
    res.json(apiRoutes.getFriends());
})

app.post("/api/friends", (req, res) => {
    var result = apiRoutes.postFriend(req.body);
    res.send(result);
})

app.get("/*", function (req, res) {
    res.sendFile(htmlRoutes.getHome());
});

app.listen(port, function () {
    console.log("App listening on PORT " + port);
});