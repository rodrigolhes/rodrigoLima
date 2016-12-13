var mongoose = require('mongoose');

var PartidoSchema = new mongoose.Schema({
    nome: String,
    numero: Number,
    endereco: String,
    uf: String,
    email: String,
    presidente: String
  
});

module.exports = mongoose.model('Partido', PartidoSchema);


