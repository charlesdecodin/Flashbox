const db = require('../db/database');
const jwt = require('jsonwebtoken');
const { uuid } = require('uuidv4');

const createSquad = (request, response)=>{

    const value = [
        uuid(),
        request.body.name,
        request.body.primary_color,
        request.body.secondary_color,
        request.body.parent.category_id,
    ]

    db.query('INSERT INTO squad VALUES ($1, $2, $3, $4, $5)', value, (error, result)=>{
        if(error){
            throw error
        }
        response.status(201).send({message: 'Section créée'})
    })
}

const getSquadByCategoryId = (request, response)=>{
    const id = request.params.id
    console.log(id);
    db.query('SELECT * FROM squad where category_id = $1', [id], (error, results)=>{
        if(error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    createSquad,
    getSquadByCategoryId
}