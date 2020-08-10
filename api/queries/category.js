const db = require('../db/database');
const jwt = require('jsonwebtoken');
const { uuid } = require('uuidv4');

const getCategoriesByAccountId = (request, response) => {
 
    const token = request.headers['x-access-token'];

    const decoded = jwt.verify(token, process.env.SECRET)
    db.query('SELECT * FROM account NATURAL JOIN account_category NATURAL JOIN category WHERE account_id = $1', [decoded.account_id], (error, results)=>{
        if (error){
            throw error
        }
        
        response.status(200).json(results.rows)
    })
}

const createCategories = (request, response) =>{

    const value = [
        uuid(),
        request.body.name,
        request.body.primary_color,
        request.body.secondary_color
    ]
    db.query('INSERT INTO category VALUES ($1, $2, $3, $4)', value, (error, result)=>{
        if (error) {
            throw error
        }
        response.status(201).send({id: value[0], message: 'Catégorie créée'})
    })
}

module.exports = {
    getCategoriesByAccountId,
    createCategories
}