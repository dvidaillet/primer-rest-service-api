const { response } = require("express");

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

const usuarioPost = (req, res = response) => {
  const { nombre, edad } = req.body;
  res.status(201).json({
    ok: true,
    msg: "post ok usuario",
    nombre,
    edad,
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
