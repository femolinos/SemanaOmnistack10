// Aqui temos os atributos de um dev, que serão armazenados no banco de dados

const mongoose = require('mongoose');
const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String], // Array de strings
  location: {
    type: PointSchema,
    index: '2dsphere', // Esfera 2D.
  },
});

module.exports = mongoose.model('Dev', DevSchema); // Exporta o modelo para o restante do projeto.