const express = require('express');
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "./upload" });

router.get('/api');

/*로그인 부분*/
router.post("/api/LoginInfo", upload.none(), (req, res) => {
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
        );
    } catch (error) {
        console.log(error);
    }
});

/*회원가입 부분*/
router.post("/api/Register", upload.none(), (req, res) => {
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
                                    SignSuccess: true,
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

module.exports = router;