var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Eleitor = require('../models/Eleitor.js');

/* GET /eleitor Listagem de eleitor. */
router.get('/', function(req, res, next) {
  Eleitor.find(function (err, eleitor) {
    if (err) return next(err);
    res.json(eleitor);
  });
});

/* POST /eleitor Cadastro de eleitor */
router.post('/', function(req, res, next) {
  Eleitor.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /eleitor/id  Lista filtrada por um eleitor*/
router.get('/:id', function(req, res, next) {
  Eleitor.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /eleitor/:id Salva a edição de eleitor */
router.put('/:id', function(req, res, next) {
  Eleitor.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /eleitor/:id Deletando o eleitor a partir do id */
router.delete('/:id', function(req, res, next) {
  Eleitor.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
