const express = require('express')
var cors = require('cors')

class Server {
    constructor (){
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosRoutePath = '/api/usuarios';

    //Middleware
    this.middlewares();
    

    //Rutas
    this.routes();
    
    }

    middlewares () {
        this.app.use(express.static('public'));
        this.app.use(cors()); 

          //lectura y parseo del body POST
         this.app.use(express.json());
    }

    routes () {
        this.app.use(this.usuariosRoutePath , require('../routes/user'))

    }

    listen (){
        this.app.listen(this.port, () => {
            console.log("servidor corriendo en puerto ", this.port)
        })
    }
}


module.exports = Server;