var mongoose = require('mongoose');

var CandidatoSchema = new mongoose.Schema({
    nome: String,
    partido: String,
    numero: Number,
    cargo: String,
    endereco: String,    
    email: String 
});

module.exports = mongoose.model('Candidato', PartidoSchema);


