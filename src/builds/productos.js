'use strict';
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
module.exports.productos = (event, context, callback) => {
    const params = {
        TableName: 'productos'        
    };
    dynamoDb.scan(params, onScan);
    function onScan(err, data) {
        if(err) {
            console.error(error);
            callback(new Error(error));
            return;
        }

        const response = {
            statusCode: 200,
            body: JSON.stringify( {
                productos: data.Items
              },
              null,
              2),
        };
        callback(null, response);     
    }   
};

module.exports.agregarProducto = (event, context, callback) => {
    const { nombre_producto, id_proveedor, id_categoria, precio, stock, estado } = JSON.parse(event.body);
    let mensaje;
    if (nombre_producto && id_proveedor && id_categoria && precio && stock && estado) {        
      const datetime = new Date().toISOString();   
      const params = {
          TableName: 'productos',
          Item: {
              "idproducto": "jv" + Math.floor(Date.now()),
              "nombre_producto": nombre_producto,
              "id_proveedor": id_proveedor,
              "id_categoria" : id_categoria,
              "precio" : precio,
              "stock" : stock,
              "estado": estado,
              "fecha_creacion" : datetime,
              "fecha_actualizacion" : datetime
          }
      };
      dynamoDb.put(params, function(err, data) {
          if (err) {            
              mensaje = "Error";
          } else {            
              mensaje = "OK";
          }
          const response = {
              statusCode: 200,
              body: JSON.stringify({ mensaje })
          };
          
          callback(null, response);
      });   
    } else {
      mensaje = "Error al momento de ingresar los datos.";
      const response = {
          statusCode: 200,
          body: JSON.stringify({ mensaje })
      };
      
      callback(null, response);
    }  
  };