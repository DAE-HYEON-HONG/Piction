"use strict";
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const mysql = require("mysql");
const multer = require("multer");
const upload = multer({ dest: "./upload" });

const path = require("path");
const env = process.env.NODE_ENV || "development";
const conf = require(path.join(__dirname, ".", "config", "db.json"))[env];
const log4js = require("log4js");

app.use(express.json());

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});
connection.connect();

app.post("/api/Login", (req, res) => {
  connection.query("SELECT * FROM user_data WHERE ?", (err, rows, fields) => {
    res.send(rows);
  });
});

app.post("/api/Register", upload.none(), (req, res) => {
  // let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let id = req.body.id;
  let email = req.body.email;
  let password = req.body.password;

  console.log(name);
  console.log(id);
  console.log(email);
  console.log(password);

  // eslint-disable-next-line no-unused-vars
  const query = connection.query(
    `insert into user_data (name, id, email, password) values ("${name} "," ${id} "," ${email} "," ${password}")`,
    function (err, rows) {
      if (err) {
        console.error(
          `쿼리문 안에 에러가 있습니다. (에러는 ${err} 입니다.):' ${query}, ${err}`
        );
        res.send(err);
      }
      console.log("데이터가 삽입되었습니다.");
    }
  );
});

app.listen(port, () => {
  console.log(`Server ON : http://localhost:${port}`);
});
