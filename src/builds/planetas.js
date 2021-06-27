'use strict';
const fetch = require('node-fetch');
module.exports.planetas = async (event) => {
  const id = event.pathParameters.id;
  const url = 'https://swapi.py4e.com/api/planets/'+ id +'/';
  let planetas = {};
  let objetoPlanetas = {};  
  await fetch(url,{ 
    headers:{'Content-Type': 'application/json'
  }})
  .then(response => response = response.json())
  .catch(error => 
    objetoPlanetas = { mensaje: error })
  .then(response => {
    planetas = response;
    if(planetas.name !== undefined){
      objetoPlanetas = { 
        nombre : planetas.name,
        periodo_rotacion : planetas.rotation_period,
        periodo_orbital : planetas.orbital_period, 
        diametro : planetas.diameter,
        gravedad : planetas.gravity,
        terreno : planetas.terrain,
        superficie_agua : planetas.surface_water,
        poblacion : planetas.population,
        residentes : planetas.residents,
        peliculas : planetas.films,
        creado : planetas.created,
        editado : planetas.edited,
        url : planetas.url,
        mensaje: 'OK'
      }; 
    } else {
      objetoPlanetas = {
          mensaje: 'NO-EXISTE'
      };
    } 
  });
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        ...objetoPlanetas
      },
      null,
      2
    ),
  };
};
