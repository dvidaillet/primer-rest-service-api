const express = require("express");
const cors = require("cors");
const dbConection = require("../db/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.port;
    this.usuariosPath = "/api/usuarios";

    //conectar a BD
    this.baseDatos();
    //middlewares
    this.middlewares();
    //rutas
    this.routes();
  }

  async baseDatos() {
    await dbConection();
  }
  middlewares() {
    this.app.use(cors());
    //lectura y parseo del body
    this.app.use(express.json());
    //directorio publico
    this.app.use(express.static("public"));
  }

  routes() {
    this.app.use(this.usuariosPath, require("../routes/user.routes"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`App corriendo en el puerto ${this.port}`);
    });
  }
}

module.exports = Server;
