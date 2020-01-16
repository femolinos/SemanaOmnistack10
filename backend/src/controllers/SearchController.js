const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  async index(request, response){
    // Buscar todos os devs em um raio de 10km
    // Filtrar por tecnologias
    const {latitude, longitude, techs} = request.query;

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray, // $in é um operador do MongoDB, que permite a filtragem.
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude],
          },
          $maxDistance: 10000,
        }
      },
    });
    
    return response.json({devs});
  }
}