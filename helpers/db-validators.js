const Role = require("../models/role");

const validarRole = async (rol) => {
  const existeRol = await Role.findOne({ name:rol });
  if (!existeRol) {
    throw new Error(`El rol ${rol} no existe`);
  }
};

module.exports = {
  validarRole,
};
