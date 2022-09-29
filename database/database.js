const Sequelize = require ('sequelize');

const connection = new Sequelize(

    'api_cardapio',

    'root',

    '',

    {

        host: 'localhost',

        dialect: 'mysql'

    }



);



module.exports = connection;