const express = require("express");
const app = express();

//listen to the server
app.listen(3000);
app.get("/", (req, res) => {
  //res.send(`<p>I am a dick.</p><p>I am sorry man i am not dick.</p>`);

  res.sendFile("./index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./about.html", { root: __dirname });
});

//app.get("/about", (req, res) => {
// res.sendFile("./about.html");
//});

//redirection
app.get("/about-me", (req, res) => {
  res.redirect("./about");
});

//404 request
app.use((req, res) => {
  res.sendFile("./404.html", { root: __dirname });
});
