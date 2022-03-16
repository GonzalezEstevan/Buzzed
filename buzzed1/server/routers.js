var router = require('express').Router();
var controller = require('./controllers/drinks.js')

router.route('/myDrinks')
  .get(controller.getDrinks)

  .post(controller.postDrinks)



module.exports = router;