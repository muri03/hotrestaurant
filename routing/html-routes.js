// directs user whenever they click on a link, this will provide info on what page to deliver
var path = require('path');

module.exports = function (app) {

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
  });

  app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/reserve.html"));
	});
//default webpage; direct the user to the homepage if the other html files were not chosen by user
	  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
}

