const path = require('path');

const AWS = require("aws-sdk");
AWS.config.loadFromPath(
    path.join(__dirname, 'config', 'awsConfig.json')
);

module.exports = {
    needs: () => upload,
    api : {
        getData : (req, res) => {
            console.log('컨트롤러 연결 성공')
        },

    }
}