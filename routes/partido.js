var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Partido = require('../models/Partido.js');

/* GET /partido Listagem de partido. */
router.get('/', function(req, res, next) {
  Partido.find(function (err, partido) {
    if (err) return next(err);
    res.json(partido);
  });
});

/* POST /partido Cadastro de partido */
router.post('/', function(req, res, next) {
  Partido.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /partido/id  Lista filtrada por um partido*/
router.get('/:id', function(req, res, next) {
  Partido.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /partido/:id Salva a edição de partido */
router.put('/:id', function(req, res, next) {
  Partido.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /partido/:id Deletando o partido a partir do id */
router.delete('/:id', function(req, res, next) {
  Partido.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
