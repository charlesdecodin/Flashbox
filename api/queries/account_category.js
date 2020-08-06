const db = require('../db/database');
const jwt = require('jsonwebtoken');
const { uuid } = require('uuidv4');

const createAccountCategorie = (request, response) =>{
    console.log(request.body);
    const token = request.body.token
    const decoded = jwt.verify(token, process.env.SECRET)
    console.log(decoded);
    const value = [
        uuid(),
        decoded.account_id,
        request.body.content.id
    ]

    db.query('INSERT INTO account_category VALUES ($1, $2, $3)', value, (error, results)=>{
        if(error){
            throw error
        }
        response.status(201).send({message:'nouvelle catégory ajouter au compte.'})

    })
}

module.exports = {
    createAccountCategorie
}