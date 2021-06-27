'use strict';
const fetch = require('node-fetch');
module.exports.recursos = async (event) => {  
  const url = 'https://swapi.py4e.com/api/';
  let recursos = '';
  let objetoRecursos = {};
  await fetch(url,{ 
    headers:{ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'
  }})
  .then(response => response = response.json())
  .catch(error => 
    objetoRecursos = { mensaje: error })
  .then(response => {
    recursos = response;
    if(recursos.films !== undefined){
        objetoRecursos = { 
          peliculas : recursos.films,
          personas : recursos.people,
          planetas : recursos.planets,
          especies : recursos.species,
          naves_estelares : recursos.starships,
          vehiculos : recursos.vehicles,
          mensaje: 'OK'
      }; 
    } else {
      objetoRecursos = {
          mensaje: 'NO-EXISTE'
      };
    }  
  });   
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        ...objetoRecursos
      },
      null,
      2
    ),
  };
};
