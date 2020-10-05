"use strict";
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const mysql = require("mysql");
const multer = require("multer");
const upload = multer({ dest: "./upload" });
const path = require("path");
const env = process.env.NODE_ENV || "development";
const conf = require(path.join(__dirname, ".", "config", "db.json"))[env];
const log4js = require("log4js");
const bcrypt = require("bcryptjs");
const AWS = require("aws-sdk");
const awsUser = require(path.join(__dirname, ".", "config", "awsConfig.json"))[env];

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const fileUpload = require("express");

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});
connection.connect();

//aws 자격증명
// const ID = awsUser.accessKeyId;
// const SECRET = awsUser.

// async function uploadImage(req, res) {
//   const file = req.files.file;
//   AWS.config;
// }

app.post("/api/LoginInfo", upload.none(), (req, res) => {
  try {
    let id = req.body.id;
    let password = req.body.password;

    console.log(id);
    console.log(password);
    connection.query(
      `SELECT * FROM user_data WHERE id='${id}'`,
      (err, result) => {
        console.log(result);
        if (err) {
          console.log(`에러코드는 ${err}`);
        } else {
          if (typeof password !== "string"){
            alert('비밀번호가 문자가 아닙니다. 다시 입력해주십시오.');
          } else {
            if (result.length === 0) {
              res.json({
                success: false,
                msg: "해당 유저의 아이디 또는 비밀번호가 일치하지 않습니다.",
              });
              console.log("아이디 불일치");
            } else {
              if (!bcrypt.compareSync(password, result[0].password)) {
                res.json({
                  success: false,
                  msg: "해당 유저의 아이디 또는 비밀번호가 일치하지 않습니다.",
                });
                console.log("비밀번호 불일치");
              } else {
                console.log("로그인 성공");
                // res.json({});
                res.json({
                  success: true,
                  msg: "로그인 성공.",
                });
              }
            }
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
});

app.post("/api/Register", upload.none(), (req, res) => {
  try {
    // let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let id = req.body.id;
    let email = req.body.email;
    let password = req.body.password;
    const passwordHash = bcrypt.hashSync(password, 10);

    console.log(name);
    console.log(id);
    console.log(email);
    console.log(password);

    connection.query(`SELECT * FROM user_data WHERE id='${id}'`,
        (err, result) => {
          console.log(result);
          if (err) {
            console.log(`에러는 : ${err}`);
          } else {
            if (result.length === 0) {
              const query = connection.query(
                  `insert into user_data (name, id, email, password) values ("${name}","${id}","${email}","${passwordHash}")`,
                  function (err, rows) {
                    if (err) {
                      console.error(
                          `쿼리문 안에 에러가 있습니다. (에러는 ${err} 입니다.):' ${query}, ${err}`
                      );
                      res.send(err);
                    }
                    console.log("데이터가 삽입되었습니다.");
                    res.json({
                      SignSuccess: true,s
                    });
                  }
              );
            } else {
              res.json({
                SignSuccess: false,
                msg: "중복되는 아이디",
              });
              console.log("중복되는 아이디");
              return (res.json);
            }
          }
        });
  }catch (err) {
    console.log(err);
  }
});

app.listen(port, () => {
  console.log(`Server ON : http://localhost:${port}`);
});
