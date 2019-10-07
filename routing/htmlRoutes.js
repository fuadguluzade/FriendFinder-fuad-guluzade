var path = require('path');
const getSurvey = () => {
    return path.join(__dirname, '/../public/survey.html');
}

const getHome = () => {
    return path.join(__dirname, "/../public/home.html");
}

module.exports = {
    getSurvey,
    getHome
}