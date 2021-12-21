var http = require("http");
//create a server object:
http
  .createServer(function (req, res) {
    const date = new Date();

    res.write("Hello ");
    res.write("");
    res.write(", today is ");
    res.write(
      `${new Intl.DateTimeFormat("en-EN", { weekday: "long" }).format(date)}`
    );
    res.write("!");
    res.end();
  })
  .listen(8080); //the server object listens on port 8080
