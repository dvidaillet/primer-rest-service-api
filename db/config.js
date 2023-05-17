const mongose = require("mongoose");
const dbConection = async () => {
  try {
    await mongose.connect(process.env.DB_CNN);
    console.log("conectado a Base de Datos...");
  } catch (error) {
    console.log("🚀 ~ conexionDB ~ error:", error);
    throw new Error("Error al inicializar la BD");
  }
};

module.exports = dbConection;
