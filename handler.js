'use strict';

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Janeth Vargas',
        //input: event,
      },
      null,
      2
    ),
  };
};
