const express = require('express');
const router = express.Router();
const veiculosRouter = require('./veiculos');

router.use('/veiculos', veiculosRouter);

module.exports = router;