const { Router } = require ("express");
const { getUsuarios, putUsuarios, postUsuarios, deleteUsuarios } = require("../controllers/users");
const routes = Router();

routes.get('/',getUsuarios);
 
routes.put('/:id', putUsuarios);

routes.post('/', postUsuarios);

routes.delete('/', deleteUsuarios)
   
module.exports = routes;