const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const ropaController = require('../controllers/ropaController');

router.get('/', productsController.getAll);
router.get('/:id', productsController.getById);
router.post('/', productsController.create);
router.put('/:id', productsController.update);
router.delete('/:id', productsController.delete);


router.get('/ropa', ropaController.getAll);
router.get('/ropa:id', ropaController.getById);
router.post('/ropa', ropaController.create);
router.put('/ropa:id', ropaController.update);
router.delete('/ropa:id', ropaController.delete);

module.exports = router;
