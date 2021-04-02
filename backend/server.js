require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("Connected to database");
});

app.use(express.json());
app.use(cors());

const userRouter = require("./routes/login");
app.use("/login", userRouter);

app.listen(9000, () => {
  console.log("Server started at 9000");
});
