const { response } = require("express");
const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");
const { existeEmail } = require("../helpers/db-validators");

const usuarioGet = async (req, res = response) => {
  const { limit = 5, desde = 0, apiKey } = req.query;
  const activo = { estado: true };
  /* const usuarios = await Usuario.find(activo).skip(desde).limit(limit);
  const total = await Usuario.countDocuments(activo); */
  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(activo),
    Usuario.find(activo).skip(desde).limit(limit),
  ]);

  res.json({
    total,
    usuarios,
  });
};

const usuarioPost = async (req, res = response) => {
  const { nombre, correo, password, rol, img } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol, img });

  //encriptar password
  const salt = bcryptjs.genSaltSync(12);
  usuario.password = bcryptjs.hashSync(password, salt);

  await usuario.save();

  res.status(201).json({
    ok: true,
    msg: "Usuario actualizado",
    usuario,
  });
};

const usuarioPut = async (req, res) => {
  const { id } = req.params;
  const { _id, password, google, correo, ...resto } = req.body;

  if (password) {
    //encriptar password
    const salt = bcryptjs.genSaltSync(12);
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.json({
    ok: true,
    msg: "put ok usuario",
    usuario,
  });
};
const usuarioDelete = async (req, res) => {
  const { id } = req.params;
  const usuario = Usuario.findByIdAndUpdate(id, { estado: false });
  res.json({
    ok: true,
    msg: "Usuario Eliminado",
    usuario,
  });
};

const usuarioPatch = (req, res) => {
  res.json({
    ok: true,
    msg: "patch ok usuario",
  });
};

module.exports = {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
  usuarioPatch,
};
