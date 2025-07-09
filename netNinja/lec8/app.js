//using legit express to reder html and we will learn about ejs too

const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

//express app
const app = express();

//connecting to mongodb
const dbUri = "mongodb://localhost:27017/";
mongoose
  .connect(dbUri)
  .then((result) => {
    console.log("Database is now connected");

    //listen for requests
    app.listen(3000, () => {
      console.log("Listening to port 3000...");
    });
  })
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");

app.use((req, res, next) => {
  console.log("in the next middleware");
  next();
});

app.use(morgan("dev"));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

app.get("/", (req, res) => {
  const blogs = [
    {
      title: "Yoshi finds eggs",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "Mario finds stars",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
    {
      title: "How to defeat bowser",
      snippet: "Lorem ipsum dolor sit amet consectetur",
    },
  ];

  res.render("index", { title: "Home", blogs });
});

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  res.render("create", { title: "Create a new blog" });
});

// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
