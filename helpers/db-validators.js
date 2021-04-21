const Role = require('../models/rol')
const Usuario =  require('../models/usuario')


const esRolValido = async (rol) => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no esta registrado en la Base de Datos`);
    }
};

const existeEmail = async (correo = '') => {
const existe =  await Usuario.findOne({correo})
if (existe){
    throw new Error(`El correo ${correo} ya esta registrado`);
}
};

const existeUsuarioPorId = async (id) => {
    const existeUsuarioId = await Usuario.findById(id);
    if(!existeUsuarioId) {
        throw new Error (`No existe ningun usuario con el id: ${id}`)
    }
}



module.exports = {
    esRolValido,
    existeEmail,
    existeUsuarioPorId
}