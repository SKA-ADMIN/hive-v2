if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
} else {
}

const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const initializePassport = require("./passport-config");
const passport = require("passport");
const flash = require("express-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const User = require("./helpers/user");
const bcrypt = require("bcrypt");

mongoose.connect(
  "mongodb+srv://SkaAdiminDb:Ska1923!!@cluster0.sngvo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected");
  }
);
initializePassport(
  passport,
  (email) => user.find((user) => user.email === email),
  (id) => user.find((user) => user.id === id)
);

///Database

const db = mysql.createPool({
  host: "sql5.cpt4.host-h.net",
  user: "crmserbgvk_1",
  password: "t2p2U7gkFu3iAKjjSA98",
  database: "crmserbgvk_db1",
});

/// Middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
require("./passport-config.js")(passport);
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(passport.initialize());
app.use( passport.session() );



/// Get Post Request

app.get("/", checkAuthenticated, (req, res) => {
  res.send("go to /data");
});

app.get("/data", (req, res) => {
  const sqlSelect = "SELECT * FROM `User` WHERE 1";
  // const sqlSelect = "SELECT * FROM  `User` WHERE BETWEEN '2020-12-12' AND  '2022-12-13'  ";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
    }
  });
});
app.get("/databydate", (req, res) => {
  const date = req.query.date;
  console.log(date);
  const sqlSelect = `SELECT * FROM User WHERE date_added = '${date}' `;
  // const sqlSelect = "SELECT * FROM  `User` WHERE BETWEEN '2020-12-12' AND  '2022-12-13'  ";
  //console.log(req.query.date);
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
app.get("/databyrange", (req, res) => {
  const dateRage1 = req.query.range1;
  const dateRage2 = req.query.range2;
  console.log(dateRage1, dateRage2);
  const sqlSelect = `SELECT * FROM User WHERE date_added BETWEEN '${dateRage1}' AND '${dateRage2}' `;
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});
app.get("/getdataanayltics", (res, req) => {
  const preset = req.query.present;
  console.log(preset);
  const sqlSelect = `x`;
});
app.get("/databypreset", (req, res) => {
  const preset = req.query.preset;

  console.log(preset);
  const sqlSelect = `SELECT * FROM User WHERE date_added >= CURRENT_DATE - INTERVAL "${preset}" DAY; `;
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      res.send(result);
      console.log(result);
    }
  });
});

app.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Found");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Success");
      });
    }
  })(req, res, next);
});
app.post("/register", (req, res) => {
  User.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) {
      throw err;
    }
    if (doc) res.send("exists");
    if (!doc) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("user created successfully");
    }
  });
});

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }

  res.redirect("/login");
}
function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    res.redirect("/");
  }

  next();
}

app.listen(3001, () => {
  console.log("running on port 3001");
});
