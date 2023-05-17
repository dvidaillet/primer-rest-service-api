const { response } = require("express");
const Usuario = require("../models/usuario");

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
  const body = req.body;
  const usuario = new Usuario(body);
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
