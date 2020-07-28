const db = require('../db/database');
const Helper = require('../controllers/Helper')
const { uuid } = require('uuidv4');



const getAccount = (request, response) => {

    db.query('SELECT * from account', (error, result) => {
        if (error) {
            throw error
        }

        response.status(200).json(result.rows)

    })
}

const postAccount = (request, response) => {



    if (!request.body.first_name || !request.body.last_name || !request.body.email || !request.body.password) {

        return response.status(400).send({ error: 'Formulaire incomplet' })

    } else if (!Helper.isValidEmail(request.body.email)) {

        return response.status(400).send({ error: 'Email invalide' })

    } else {
        db.query('SELECT * FROM account WHERE email = $1', [request.body.email], (error, results) => {
            if (results.rows[0]) {
                return response.status(400).send({ error: 'Adresse e-mail déjà utilisée' })
            } else {
                const hashPassword = Helper.hashPassword(request.body.password)
                console.log(hashPassword);

                const value = [
                    uuid(),
                    request.body.first_name,
                    request.body.last_name,
                    request.body.email,
                    hashPassword
                ]

                console.log(value);


                db.query('INSERT INTO account(account_id, first_name, last_name, email, password) values ($1, $2, $3, $4, $5) returning *', value, (error, result) => {
                    if (error) {
                        throw error
                    }
                    console.log(result);
                    const token = Helper.generateToken(result.rows[0].account_id)
                    return response.status(201).send({ token })
                })
            }
        })
    }
}

const loginAccount = (request, response) => {

    if (!request.body.email && !request.body.password) {

        return response.status(400).send({ error: "Données incomplètes" })

    } else if (!request.body.password) {

        return response.status(400).send({ error: 'Veuillez saisir votre mot de passe' });

    } else if (!request.body.email) {

        return response.status(400).send({ error: 'Veuillez saisir votre adresse mail' });

    }

    db.query('SELECT * FROM account WHERE email = $1', [request.body.email], (error, results) => {
        if (!results.rows[0]) {
            return response.status(400).send({ error: 'Pas d\'utilisateur enregistrer pour cette adresse email' })
        }
        if (error) {
            return response.status(400).send(error);
        }
        if (!Helper.comparePassword(results.rows[0].password, request.body.password)) {
            return response.status(400).send({ error: 'Mot de passe incorrect' });
        }
        const token = Helper.generateToken(results.rows[0].account_id);
        const connect = request.body.connect
        return response.status(200).send({ token, connect});
    })
}


module.exports = {
    getAccount,
    postAccount,
    loginAccount
}