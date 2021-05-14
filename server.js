// youtube link https://www.youtube.com/watch?v=1NrHkjlWVhM&t=216s

// server from library express we installed via terminal
const express = require("express");

// connects to our database
const mongoose = require("mongoose");

//
const articleRouter = require("./routes/articles");

// calling express as a function
const app = express();

// connecting to mongoose database
mongoose.connect("mongodb://localhost/blog", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// view engine converts to html
app.set("view engine", "ejs");

//
app.use(express.urlencoded({ extended: false }));

// route that gets sent to app
app.get("/", (req, res) => {
  // articles is an array of objects
  const articles = [
    {
      title: "Test Article",
      createdAt: new Date(),
      description: "Test description mothertrucker!",
    },
    {
      title: "Test Article 2",
      createdAt: new Date(),
      description: "Test description  2 mothertrucker!",
    },
  ];

  // render calls index.js and displays, passing in articles[{}]
  res.render("articles/index", { articles: articles });
});

// will add every route created in articleRouter after /articles
app.use("/articles", articleRouter);

// localhost:5000 listening
app.listen(5000);
