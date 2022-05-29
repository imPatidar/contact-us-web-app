const { Sequelize } = require('sequelize');
const config = require("../config/config");

const sequelize = new Sequelize(config.database.database, config.database.user, config.database.password, {
    host: config.database.host,
    dialect: 'mysql',
    logging: true,
});

const modelDefiners = [
    require('./models/user.model'),
    require('./models/contactUs.model')
];

// We define all models according to their files.
for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
}


// We export to sequelize connection instance to be used around our app.
module.exports = sequelize;