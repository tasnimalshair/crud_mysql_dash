var express = require("express");
var app = express();
const { usersRouter } = require("./routes");

const port = 5050;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", usersRouter);
app.listen(port, () => {
  console.log(`SERVER is running on http://localhost:${port}`);
});
