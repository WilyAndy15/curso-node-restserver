const { response} = require('express'); 
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');


  const getUsuarios = async (req, res = response) => {
   
    const {limite=3} = req.query;
    const [total, usuarios]= await Promise.all([
      Usuario.countDocuments({estado:true}),
      Usuario.find({estado:true}).limit(Number(limite)),
      
    ])
    
    
    res.json({
        total,
        usuarios
    });
  }

  const putUsuarios = async  (req, res = response) => {
    const id = req.params.id
    const {password, google, ...resto} = req.body;
        
    //TODO validar enla base de datos

    if ( password ) {
        const salt = bcryptjs.genSaltSync(10);
        resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        msg: 'put API',
        usuario
    });
  }

  const postUsuarios  = async (req, res = response) => {

    const {nombre,correo, password, rol } = req.body;
    
    const usuario = new Usuario({nombre, correo, password, rol});
    // verificar si el correo existe
  

    //Encriptar la contrasena
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt);

    //Guardas
    await usuario.save();

    res.json({
        msg: 'post API - controlador',
        usuario
    });
  }

  const deleteUsuarios = async (req, res = response) => {
     const id =  req.params.id;
      // Eliminar fisicamente

      //const usuario = await Usuario.findByIdAndDelete(id)
      const usuario = await Usuario.findByIdAndUpdate(id, {estado:false})
    res.json({
        usuario
    });
  }

  module.exports = {
      getUsuarios,
      putUsuarios,
      postUsuarios,
      deleteUsuarios

  }