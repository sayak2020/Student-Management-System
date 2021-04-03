require('dotenv').config()

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const session = require('express-session');
const passport=require("passport");
autoIncrement = require('mongoose-auto-increment');





mongoose.connect(process.env.DATABASE_URL,  { useUnifiedTopology: true , useNewUrlParser: true}); 
const db = mongoose.connection;
db.on('error', (error) => { console.error(error)});
db.once('open', () => { console.log('Connected to database')});
autoIncrement.initialize(db);


app.use(session({
    secret: 'Our secret',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.json());







const userRouter = require('./routes/login');
app.use('/login', userRouter);

const student_profile = require('./routes/student_profile');
app.use('/student_profile', student_profile);

const leaveApplication = require('./routes/leave');
app.use('/leave', leaveApplication);

const attendence  = require('./routes/attendence');
app.use('/attendence',attendence);


app.listen(3000, () => {
    console.log('Server startded at 3000');
});