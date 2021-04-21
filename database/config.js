const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
       await mongoose.connect(process.env.MONGOBD_ATLAS, {
           useNewUrlParser: true,
           useUnifiedTopology: true,
           useCreateIndex: true,
           useFindAndModify: false
       });
       console.log("base de datos online  ") 
    } catch (error) {
        console.log(error)
        throw new Error ('ERROS a la hora de inicializar la base de datos');
    }
}


module.exports = {
    dbConnection
}