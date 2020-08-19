var path = require("path");
// Need to target the two html files that are created in the public folder
module.exports = function (app) {
  app.get("/exercise", (req, res) => {
    //   Takes you to the page where you can choose your next exercise I think?
    res.sendFile(path.join(__dirname, "../public/exercise.html"));
  });
  // Called when you'd like to check out your workout statistics
  app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stats.html"));
  });
  // Called for homepage
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};
