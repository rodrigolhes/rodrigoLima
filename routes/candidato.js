var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Candidato = require('../models/Candidato.js');

/* GET /candidato Listagem de candidato. */
router.get('/', function(req, res, next) {
  Candidato.find(function (err, candidato) {
    if (err) return next(err);
    res.json(candidato);
  });
});

/* POST /candidato Cadastro de candidato */
router.post('/', function(req, res, next) {
  Candidato.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /candidato/id  Lista filtrada por um candidato*/
router.get('/:id', function(req, res, next) {
  Candidato.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /candidato/:id Salva a edição de candidato */
router.put('/:id', function(req, res, next) {
  Candidato.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /candidato/:id Deletando o candidato a partir do id */
router.delete('/:id', function(req, res, next) {
  Candidato.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
