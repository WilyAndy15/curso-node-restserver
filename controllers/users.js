const { response} = require('express'); 

  const getUsuarios = (req, res = response) => {
   const query  = req.query; 

    res.json({
        msg: 'get API - controlador'
    });
  }

  const putUsuarios = (req, res = response) => {
    const id = req.params.id    

    res.json({
        msg: 'put API',
        id
    });
  }

  const postUsuarios = (req, res = response) => {

    const {nombre, edad}= req.body;

    res.json({
        msg: 'post API - controlador',
        nombre,
        edad
    });
  }

  const deleteUsuarios = (req, res = response) => {
    res.json({
        msg: 'delete  API - controlador'
    });
  }

  module.exports = {
      getUsuarios,
      putUsuarios,
      postUsuarios,
      deleteUsuarios

  }