const db = require('../db/database');
const jwt = require('jsonwebtoken');
const { uuid } = require('uuidv4');

const createCard = (request, response)=>{

    console.log(Date.now());
    
    const value = [
        uuid(),
        request.body.recto,
        request.body.verso,
        request.body.evaluation,
        1,
        new Date(),
        request.body.parent
    ]


    db.query('INSERT INTO card VALUES ($1, $2, $3, $4, $5, $6, $7)', value, (error, result) =>{
        if(error){
            throw error
        }
        response.status(201).send({message: 'Carte créée'})
    })

}

module.exports = {
    createCard
}