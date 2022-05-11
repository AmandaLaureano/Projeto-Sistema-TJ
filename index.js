const express = require('express')
const app = express()
const Clientes=require('./models/clientes')
const Login=require('./models/login')
const handlebars = require("express-handlebars")

const insereDados=require('./inserir')

app.engine('handlebars',handlebars.engine({defaultLayout:'main'}))
app.set('view engine','handlebars')


app.use(express.json())
app.use(express.urlencoded({extended:true}))

//ROTAS
app.use('/public',express.static(__dirname +'/public'));
app.use('/img',express.static(__dirname +'/img'));

app.get('/', function (req,res){
    res.sendFile(__dirname+'/src/inicial.html');
});
app.get('/login', function (req,res){
    res.render('login');
});
app.get('/cadastro', function (req,res){
    res.render('form');
});


app.post('/add-dados', function(req,res){
    Clientes.create({
        nome:req.body.nome,
        data_nascimento:req.body.data_nascimento,
        email:req.body.email,
        senha:req.body.senha,
        confirma_senha:req.body.confirma_senha,
        telefone:req.body.telefone,
        obj_profissional:req.body.obj_profissional
    }).then(function(){
        res.send('Cadastrou')
    }).catch(function(erro){
        res.send('Não cadastrou'+erro)
    })
})

app.post('/add-dados-login', function(req,res){
    Login.create({  
        email:req.body.email,
        senha:req.body.senha
    }).then(function(){
        res.send('Login efetuado')
    }).catch(function(erro){
        res.send('Não cadastrou'+erro)
    })
})

app.get('/clientes',function(req,res){
    Clientes.findAll().then(function(clientes){
      res.render('clientes',{layout:false,clientes:clientes})
    })
})

app.listen(8080)