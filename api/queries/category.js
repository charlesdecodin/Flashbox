const db = require('../db/database');
const jwt = require('jsonwebtoken')

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

module.exports = {
    getCategoriesByAccountId
}