'use strict';
const fetch = require('node-fetch');
module.exports.naves = async (event) => {
  const id = event.pathParameters.id;
  const url = 'https://swapi.py4e.com/api/starships/'+ id +'/'; 
  let naves = {};
  let objetoNaves = {};  
  await fetch(url,{ 
    headers: {'Content-Type': 'application/json'
  }})
  .then(response => response = response.json())
  .catch(error => 
    objetoNaves = { mensaje: error })
  .then(response => {
    naves = response;
    if(naves.name !== undefined){
      objetoNaves = { 
          nombre : naves.name,
          modelo : naves.model,
          fabricante : naves.manufacturer,
          costo_en_credito : naves.cost_in_credits,
          longitud : naves.length,
          velocidad_max_atmosferica : naves.max_atmosphering_speed,
          tripulacion: naves.crew,
          pasajeros : naves.passengers,
          capacidad_carga : naves.cargo_capacity,
          consumibles : naves.consumables,
          calificacion_hiperimpulsor : naves.hyperdrive_rating,
          mglt : naves.MGLT,
          clase_nave_estelar : naves.starship_class,
          pilotos : naves.starship_class,
          peliculas : naves.films,
          creado : naves.created,
          editado : naves.edited,
          url : naves.url ,
          mensaje: 'OK'
      }; 
    } else {
      objetoNaves = {
          mensaje: 'NO-EXISTE'
      }
    }        
  }); 

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        ...objetoNaves
      },
      null,
      2
    ),
  };
};
