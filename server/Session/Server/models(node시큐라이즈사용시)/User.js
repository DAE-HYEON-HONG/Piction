// module.exports = (sequelize, DataTypes) => {
//     return sequelize.define(
//         'user',
//         {
//             id: {
//                 type: DataTypes.String(50),
//                 allowNull : true
//             },
//             password: {
//                 type: DataTypes.String(50),
//                 allowNull : true
//             },
//             email: {
//                 type: DataTypes.String(50),
//                 allowNull : true
//             },
//             age: {
//                 type: DataTypes.String(50),
//                 allowNull : true
//             },
//         },
//         {
//             charset: 'utf8',
//             collate: 'utf8_general_ci',
//             timestamps: false,
//         }
//     )};