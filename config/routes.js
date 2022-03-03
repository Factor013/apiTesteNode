const express = require('express')
const routes = express.Router()

module.exports = routes

let db = [
    { '1': {Nome:'cliente1', Idade: '20'} },
    { '2': {Nome:'cliente2', Idade: '30'} },
    { '3': {Nome:'cliente3', Idade: '40'} },
    { '4': {Nome:'cliente4', Idade: '50'} }
]

//Mostrar Dados
routes.get('/', (req, res) =>{
    return res.json(db)
})

//Inserir Dados
routes.post('/add', (req,res) => {
    const body = req.body

    if(!body)
        return res.status(400).end()

    db.push(body)
    return res.json(body)
})

//Deleta Dados
routes.delete('/:id', (req, res) =>{
    const id = req.params.id

    let newDB = db.filter(item => {
        if(!item[id])
        return item
    })
    db = newDB
    return res.send(db)
})





