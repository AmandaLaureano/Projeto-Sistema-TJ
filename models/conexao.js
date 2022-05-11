/*const pg=require('pg')
const {Pool}=require('pg')
const { database, password} = require('pg/lib/defaults');

const client=new pg.Client({
const pool =new Pool ({
    user :'postgres',
    host:'localhost',
    database:'cad_cliente',
    password:'0123',
    port: 5432
})
module.exports=pool
*/

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('projeto', 'postgres', '0123', {
    host: 'localhost',
    dialect:  'postgres' 
  });

  module.exports= {
    Sequelize:Sequelize,
    sequelize:sequelize
 }
 