const http = require("http");
const fs = require("fs");
//let myContent;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  let path = "./";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about":
      res.statusCode = 301;
      setHeader("Location", "/about");
      res.end();
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //set header we will use content type for now

  res.setHeader("Content-type", "text/html");

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log("Error:", err.message);
      res.end();
    } else {
      //myContent = data.toString();
      //res.write(myContent);
      res.end(data);
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
