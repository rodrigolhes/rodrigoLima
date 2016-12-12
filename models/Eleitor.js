var mongoose = require('mongoose');

var EleitorSchema = new mongoose.Schema({
  nome: String,
  idade: Number,
  titulo: Number,
  secao: Number,
  zona: Number
});

module.exports = mongoose.model('Eleitor', EleitorSchema);
