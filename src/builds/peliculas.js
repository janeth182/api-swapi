'use strict';
const fetch = require('node-fetch');
module.exports.peliculas = async (event) => {
  const id = event.pathParameters.id;
  const url = 'https://swapi.py4e.com/api/films/'+ id +'/';
  let peliculas = {};
  let objetoPeliculas = {};  
  await fetch(url,{ 
    headers:{'Content-Type': 'application/json'
  }})
  .then(response => response = response.json())
  .catch(error => 
    objetoPeliculas = { mensaje: error })
  .then(response => {
    peliculas = response;
    if(peliculas.title !== undefined){
      objetoPeliculas = { 
          titulo : peliculas.title,
          episodio_id : peliculas.episode_id,
          rastreo_apertura : peliculas.opening_crawl,
          director : peliculas.director,
          productora : peliculas.producer,
          fecha_lanzamiento : peliculas.release_date,
          personajes : peliculas.characters,   
          planetas : peliculas.planets,
          naves : peliculas.starships,
          vehiculos : peliculas.vehicles,
          especies : peliculas.species,
          creado : peliculas.created,
          editado : peliculas.created,
          url : peliculas.url,
          mensaje: 'OK'
      }; 
    } else {
      objetoPeliculas = {
          mensaje: 'NO-EXISTE'
      };
    } 
  });   
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        ...objetoPeliculas
      },
      null,
      2
    ),
  };
};
