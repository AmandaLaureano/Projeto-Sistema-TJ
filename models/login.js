const { type } = require('express/lib/response')
const { sequelize, Sequelize } = require('./conexao')
const db=require('./conexao')

const Login=sequelize.define('login',{
    email: {
        type: Sequelize.STRING
    },
    senha:{
        type: Sequelize.STRING
    }

})


module.exports=Login
