const express = require("express");
const logger = require("morgan");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;
// const db = require("./models");
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = require("./models");
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

app.listen(PORT, () => {
  console.log(
    `==> 🌎  Listening on port: Visit http://localhost:${PORT}/ in your browser.`,
    PORT,
    PORT
  );
});
