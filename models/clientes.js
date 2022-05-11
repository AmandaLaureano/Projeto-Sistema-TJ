const { type } = require('express/lib/response')
const { sequelize, Sequelize } = require('./conexao')
const db=require('./conexao')

const Clientes=sequelize.define('cad_clientes',{
    nome:{
        type: Sequelize.STRING
    },

    data_nascimento:{
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    senha:{
        type: Sequelize.STRING
    },
    confirma_senha:{
        type: Sequelize.STRING
    },
    telefone:{
        type: Sequelize.STRING
    },
    obj_profissional:{
        type: Sequelize.STRING
    }
    
})


module.exports=Clientes

