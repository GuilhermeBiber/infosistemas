const express = require('express');
const router = express.Router();
const veiculoController = require('../../controller/veiculos_controller');


router.get('/', veiculoController.api.get);
router.post('/', veiculoController.api.salva);
router.put('/:id', veiculoController.api.atualiza);
router.delete('/:id', veiculoController.api.deleta);

module.exports = router;
