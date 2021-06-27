'use strict';
const fetch = require('node-fetch');
module.exports.personas = async (event) => {
  const id = event.pathParameters.id;
  const url = 'https://swapi.py4e.com/api/people/'+ id +'/';  
  let personas = {};  
  let objetoPersonas = {};
  await fetch(url,{ 
    headers:{'Content-Type': 'application/json'
  }})
  .then(response => response = response.json())
  .catch(error => 
    objetoPersonas = { mensaje: error })
  .then(response => {
    personas = response;
    if(personas.name !== undefined){
       objetoPersonas = { 
        nombre : personas.name,
        alto : personas.height,
        masa : personas.mass,
        color_pelo : personas.hair_color,
        color_ojos : personas.eye_color,
        anio_nacimiento : personas.birth_year,
        genero : personas.gender,
        mundo_natal : personas.homeworld,
        peliculas : personas.films,
        especies : personas.species,
        vehiculo : personas.vehicles,
        nave_estelar : personas.starships,
        creado : personas.created,
        editado : personas.created,
        url : personas.url,       
        mensaje: 'OK'
      }; 
    } else {
      objetoPersonas = {
          mensaje: 'NO-EXISTE'
      };
    }  
  });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        ...objetoPersonas
      },
      null,
      2
    ),
  };
};
