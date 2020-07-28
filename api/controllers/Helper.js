const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config()


  const hashPassword = (password) =>  {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8))
  };
  /**
   * comparePassword
   * @param {string} hashPassword 
   * @param {string} password 
   * @returns {Boolean} return True or False
   */
  const comparePassword = (hashPassword, password) =>  {
    return bcrypt.compareSync(password, hashPassword);
  };
  /**
   * isValidEmail helper method
   * @param {string} email
   * @returns {Boolean} True or False
   */
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  /**
   * Generate Token
   * @param {string} id
   * @returns {string} token
   */
  const generateToken = (id) => {
    const token = jwt.sign({
      account_id: id
    },
      process.env.SECRET, { expiresIn: '24h' }
    );
    return token;
  }
    /**
   * Generate Token 
   * @param {string} id
   * @returns {string} token
   */
  const generateTokenSmallDuration = (id) => {
    const token = jwt.sign({
      account_id: id
    },
      process.env.SECRET, { expiresIn: '300000ms' }
    );
    return token;
  }



module.exports = {
    generateToken,
    isValidEmail,
    comparePassword,
    hashPassword,
    generateTokenSmallDuration
};