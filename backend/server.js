require("dotenv").config();
const cors = require("cors");

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const session = require("express-session");
const passport = require("passport");
autoIncrement = require("mongoose-auto-increment");

mongoose.connect(process.env.DATABASE_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
});
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
});
db.once("open", () => {
  console.log("Connected to database");
});
autoIncrement.initialize(db);

app.use(
  session({
    secret: "Our secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());
app.use(cors());

const userRouter = require("./routes/login");
app.use("/login", userRouter);

const student_profile = require("./routes/student_profile");
app.use("/student_profile", student_profile);

const leaveApplication = require("./routes/leave");
app.use("/leave", leaveApplication);

const attendence = require("./routes/attendence");
app.use("/attendence", attendence);

const admin_viewprofile = require("./routes/admin_viewprofile");
app.use("/admin_viewprofile", admin_viewprofile);

const admin_attendence = require("./routes/admin_attendence");
app.use("/admin_attendence", admin_attendence);

const admin_leave = require("./routes/admin_leave");
app.use("/admin_leave", admin_leave);

const admin_login = require("./routes/admin/admin_login");
app.use("/admin_login", admin_login);

const test = require("./routes/test");
app.use("/test", test);

const test_respons = require("./routes/test_respons");
app.use("/test_respons", test_respons);

app.listen(9000, () => {
  console.log("Server startded at 9000");
});
