const db = require('../db/database');
const jwt = require('jsonwebtoken');
const { uuid } = require('uuidv4');

const createCard = (request, response)=>{
     
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


const getCardBySquadId = (request, response)=> {
    const id = request.params.id

    db.query('SELECT * FROM card where squad_id = $1', [id], (error, results)=>{
        if (error){
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const deleteCard = (request, response) => {
    const id = request.params.id
    console.log(id);

    db.query('DELETE FROM card WHERE card_id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        response.status(201).send({ message: "Carte supprimée", validation: true, id: request.params.id })
    })
}

const updateCard = (request, response) => {

    const value = [
        request.body.recto,
        request.body.verso,
        request.body.squad_id,
        request.body.card_id
    ]
    
    db.query('UPDATE card SET recto = $1, verso = $2, squad_id= $3 WHERE card_id = $4', value, (error, result) => {
        if (error) {
            throw error
        }
        response.status(201).send({ message: "Carte modifiée", validation: true })
    })

}



module.exports = {
    createCard,
    getCardBySquadId,
    deleteCard,
    updateCard
}