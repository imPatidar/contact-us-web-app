let Sequelize = require('sequelize');

module.exports = (sequelize) => sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    user_code: {
        type: Sequelize.STRING
    },
    user_name: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
    other_info: {
        type: Sequelize.STRING,
    },
    allow_login: {
        type: Sequelize.BOOLEAN,
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

