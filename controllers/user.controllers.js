const { response } = require("express");
const Usuario = require("../models/usuario");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

const usuarioGet = (req, res = response) => {
  const { q, name, apiKey } = req.query;
  res.json({
    ok: true,
    msg: "get ok usuario",
    q,
    name,
    apiKey,
  });
};

const usuarioPost = async (req, res = response) => {
  
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  //comprobar si el correo existe
  const existeUsuario = await Usuario.findOne({ correo });
  if (existeUsuario) {
    return res.status(401).json({
      ok: false,
      msg: "El correo ya esta registrado",
    });
  }

  //encriptar password
  const salt = bcryptjs.genSaltSync(12);
  usuario.password = bcryptjs.hashSync(password, salt);

  await usuario.save();

  res.status(201).json({
    ok: true,
    msg: "post ok usuario",
    usuario,
  });
};

const usuarioPut = (req, res) => {
  const { id } = req.params;
  res.json({
    ok: true,
    msg: "put ok usuario",
    id,
  });
};
const usuarioDelete = (req, res) => {
  res.json({
    ok: true,
    msg: "delete ok usuario",
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
