const Role = require("../models/role");
const Usuario = require("../models/usuario");

const validarRole = async (rol) => {
  const existeRol = await Role.findOne({ name: rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no existe`);
  }
};

const existeEmail = async (correo) => {
  const existeUsuario = await Usuario.findOne({ correo });
  if (existeUsuario) {
    throw new Error(` El correo ${correo} ya esta registrado`);
  }
};

module.exports = {
  validarRole,
  existeEmail,
};
