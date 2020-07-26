const http = require("http");
const express = require("express");
const logger = require("morgan");
const cors = require("cors");

//routes
const indexRouter = require("../routes/index.js");
const userRouter = require("../routes/user");
const chatRoomRouter = require("../routes/chatRoom");
const deleteRouter = require("../routes/delete");

const app = express();

// Get port from environment and store in Express
const port = process.env.PORT || "3000";
app.set("port", port);

app.use(logger("dev"));
// express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object
app.use(express.json());
// express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({ extended: false }));

app.use("/", indexRouter);
app.use("/users", userRouter);
app.use("/room", chatRoomRouter);
app.use("/delete", deleteRouter);

// catch 404 and forward to error handler
app.use("*", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "API endpoint doesnt exist",
  });
});

// create HTTP server
const server = http.createServer(app);
// listen on provided port. on all network interfaces
server.listen(port);
// event listener for HTTP server "listening" event
server.on("listening", () => {
  console.log(`Listening on port :${port}`);
});
