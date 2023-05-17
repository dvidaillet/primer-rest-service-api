const { Router } = require("express");
const router = Router();
const { check } = require("express-validator");
const {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
  usuarioPatch,
} = require("../controllers/user.controllers");
const { validarCampos } = require("../middlewares/validarCampos");

router.get("/", usuarioGet);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("correo", "El formato del correo es incorrecto").isEmail(),
    check("password", "Minimo de 6 caracteres ").isLength({ min: 6 }),
    check("rol", "Rol no valido ").isIn(["ADMIN_ROLE", "USER_ROLE"]),
    validarCampos,
  ],
  usuarioPost
);
router.put("/:id", usuarioPut);
router.delete("/", usuarioDelete);
router.patch("/", usuarioPatch);

module.exports = router;
