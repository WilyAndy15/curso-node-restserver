const { Router } = require ("express");
const { getUsuarios, putUsuarios, postUsuarios, deleteUsuarios } = require("../controllers/users");
const routes = Router();
const {check} = require('express-validator');
const { validarCampos } = require("../middlewares/validarCampos");
const { esRolValido, existeEmail, existeUsuarioPorId } = require("../helpers/db-validators");

routes.get('/', getUsuarios);
 
routes.put('/:id', [
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    check('rol').custom(esRolValido),
    validarCampos
], putUsuarios);

routes.post('/', [
    check('correo','El correo no es valido').isEmail(),
    check('correo').custom(existeEmail),
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('password','El password debetener mas de 6 letras').isLength({min:6}),
    //check('rol','No es un rol valido').isIn('ADMIN','USER'),
    check('rol').custom(esRolValido),
    validarCampos
], postUsuarios);

routes.delete('/:id',[
    check('id', 'No es un id valido').isMongoId(),
    check('id').custom(existeUsuarioPorId),
    validarCampos
], deleteUsuarios)
   
module.exports = routes;