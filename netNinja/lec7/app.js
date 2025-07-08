//using legit express to reder html and we will learn about ejs too

const express = require("express");
const morgan = require("morgan");

//express app
const app = express();

//listen for requests
app.listen(6969, () => {
  console.log("We vibin on 6969 🚀");
});

//middleware
app.use((req, res, next) => {
  console.log(`HostName: ${req.hostname}`);
  console.log("Path: ", req.path);
  console.log("Method", req.method);

  next();
});

app.use(morgan("dev"));

//static files
app.use(express.static("./views/public"));

app.use((req, res, next) => {
  console.log("I am in the next middleware");
  console.log("/////////////////////////");
  next();
});

//register view engine
app.set("view engine", "ejs");

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
