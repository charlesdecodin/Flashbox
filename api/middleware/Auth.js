const jwt = require('jsonwebtoken');
const db = require('../db/database')

const verifyToken = (request, response, next) =>{
    const token = request.headers['x-access-token'];

    if (!token) {
        return response.status(400).send({ 'message': 'Token is not provided' });
    }

    const decoded = jwt.verify(token, process.env.SECRET)
    
    db.query('SELECT * FROM account WHERE account_id = $1', [decoded.account_id],(error, results)=>{
        if (!results.rows[0]) {
            return response.status(400).send({ 'message': 'The token you provided is invalid' });
        }
        if (error) {
            return response.status(400).send(error);
        }
            request.account = { account_id: decoded.account_id };
            next()
    })
}

module.exports = { 
    verifyToken
}