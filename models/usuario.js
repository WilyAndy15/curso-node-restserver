const {Schema, model} = require('mongoose');


const UsuarioSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    correo: {
        type: String,
        required: [true, "Correo bligatorio"]
    },
    password: {
        type: String,
        required: [true, 'La contrase;a es obligatoria']
    },
    img: {
        type: String
    },
    rol: {
       type: String,
       required: true,
       enum: ['ADMIN','USER']     
    },
    estado:{
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }

});

UsuarioSchema.methods.toJSON = function (){
    const {__v, password, ...user} = this.toObject();
    return user;
} 

module.exports = model('Usuario', UsuarioSchema);