const db = require('../db/database');
const jwt = require('jsonwebtoken');
const { uuid } = require('uuidv4');

const createSquad = (request, response) => {

    console.log(request.body);
    if (request.body.noun && request.body.parent) {
        
            const value = [
                uuid(),
                request.body.noun,
                request.body.primary_color,
                request.body.secondary_color,
                request.body.parent.category_id,
            ]
        db.query('INSERT INTO squad VALUES ($1, $2, $3, $4, $5)', value, (error, result) => {
            if (error) {
                throw error
            }
            response.status(201).send({ message: 'Section créée' })
        })
    }else{
        response.status(201).send({ message: 'champs manquants', validation: false })
    }

}

const getSquadByCategoryId = (request, response) => {
    const id = request.params.id

    db.query('SELECT * FROM squad where category_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const updateSquad = (request, response) => {
    const value = [
        request.body.noun,
        request.body.parent.category_id,
        request.body.squad_id
    ]

    db.query('UPDATE squad SET noun = $1, category_id= $2 WHERE squad_id = $3', value, (error, result) => {
        if (error) {
            throw error
        }
        response.status(201).send({ message: "Section modifiée", validation: true })
    })
}

const deleteSquad = (request, response) => {
    const id = request.params.id

    db.query('DELETE FROM squad WHERE squad_id = $1', [id], (error, result) => {
        if (error) {
            throw error
        }
        response.status(201).send({ message: "Section supprimée", validation: true, id: request.params.id })
    })

}

module.exports = {
    createSquad,
    getSquadByCategoryId,
    deleteSquad,
    updateSquad
}