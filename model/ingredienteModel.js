const Sequelize = require('sequelize');

const connection = require('../database/database');

const Ingrediente = connection.define(
    'tb_ingrediente',
    {
        nome_ingrediente:{
            type: Sequelize.STRING,
            allowNull: false
        }
    }
);

//Ingrediente.sync({force:true});

module.exports = Ingrediente;