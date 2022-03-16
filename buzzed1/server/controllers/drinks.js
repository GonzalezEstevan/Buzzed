const pool = require('../../database/index')

module.exports = {
  getDrinks: async (req, res) => {
    var queryStr = `SELECT * FROM drinksTable`;
   await pool.query(queryStr)
      .then( response => {
         res.send(response).status(204)
      })
      .catch(err => {
        console.error(err.message, 'ERROR')
      })
  },
  postDrinks: (req, res) => {
    const {id, name, pic, instructions} = req.body
    var queryStr = `INSERT INTO drinksTable (id, drinkName, pic, instructions) VALUES ($1 ,$2 ,$3 ,$4)`;
    pool.query(queryStr, [id, name, pic, instructions])
      .then(response => {
        res.status(204).send(response)
      })
      .catch(err => {
        console.error(err.message, 'ERROR')
      })
  },
}