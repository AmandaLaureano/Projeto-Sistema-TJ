const db=require('./conexao')

async function listar(){
    await db.connect()
    result=await db.query('select *from aluno')
    console.log('alunos')
    console.log(result.rows)
    await db.end()
}

listar()