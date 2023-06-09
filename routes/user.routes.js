const { Router } = require("express");
const router = Router();
// const Rol = require("../models/role");
const { check } = require("express-validator");
const {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
  usuarioPatch,
} = require("../controllers/user.controllers");
const { validarCampos } = require("../middlewares/validarCampos");
const {
  validarRole,
  existeEmail,
  existeUsusarioById,
} = require("../helpers/db-validators");

router.get("/", usuarioGet);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("correo", "El formato del correo es incorrecto").isEmail(),
    check("correo").custom(existeEmail),
    check("password", "Minimo de 6 caracteres ").isLength({ min: 6 }),
    check("rol").custom(validarRole),
    validarCampos,
    // check("rol", "Rol no valido ").isIn(["ADMIN_ROLE", "USER_ROLE"]),
  ],
  usuarioPost
);
router.put(
  "/:id",
  [
    check("id", "No es un id valido ").isMongoId(),
    check("id").custom(existeUsusarioById),
    check("rol").custom(validarRole),
    validarCampos,
  ],
  usuarioPut
);
router.delete(
  "/:id",
  [
    check("id", "No es un id valido ").isMongoId(),
    check("id").custom(existeUsusarioById),
    validarCampos,
  ],
  usuarioDelete
);
router.patch("/", usuarioPatch);

module.exports = router;
