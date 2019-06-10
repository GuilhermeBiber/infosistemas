const express = require('express');
const router = express.Router();
const veiculoModel = require('../model/veiculos_model');

/* GET home page. */
router.get('/', function(req, res, next) {
  veiculoModel.get().then(linhas => {
    res.render('index', { veiculos: linhas });
  });
});

module.exports = router;
