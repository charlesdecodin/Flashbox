const db = require('../db/database');
const jwt = require('jsonwebtoken');
const { uuid } = require('uuidv4');

const createSquad = (request, response)=>{

    const value = [
        uuid(),
        request.body.name,
        request.body.primary_color,
        request.body.secondary_color,
        request.body.category_id,
    ]

    console.log(value);

    db.query('INSERT INTO squad VALUES ($1, $2, $3, $4, $5)', value, (error, result)=>{
        if(error){
            throw error
        }
        response.status(201).send({message: 'Section créée'})
    })
}

module.exports = {
    createSquad
}