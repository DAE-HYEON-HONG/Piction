'use strict';

const path = require('path');
const Sequelize = require('sequelize');


const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname,'..','config','db.json'))[
    env
    ];

const db = {};

// server/models(node시큐라이즈사용시)/index.js

let sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
    {
        define: {
            charset: 'utf-8',
            collate: 'utf8_general_ci'
        }
    }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.sequelize
.authenticate()
.then(() => {
    console.log('Connection with Server Database successfully');
})
.catch(err => {
    console.log('err connection with server', err);
});

// db.User = require('./User.js')(sequelize, Sequelize);

db.secret = '(9*)5$&!3%^0%^@@2$1!#5@2!4';
module.exports = db;