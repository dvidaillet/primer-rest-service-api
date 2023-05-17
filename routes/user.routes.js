const { Router } = require("express");
const { check } = require("express-validator");
const {
  usuarioGet,
  usuarioPost,
  usuarioPut,
  usuarioDelete,
  usuarioPatch,
} = require("../controllers/user.controllers");
const router = Router();

router.get("/", usuarioGet);
router.post(
  "/",
  [check("nombre", "El Nombre es obligatorio").not().isEmpty()],
  [check("correo", "El formato es incorrecto").isEmail()],
  [check("password", "minimo de 6 caracteres").isLength({ min: 6 })],
  [check("rol", "No es un rol valido").isIn(["ADMIN_ROLE", "USER_ROLE"])],
  usuarioPost
);
router.put("/:id", usuarioPut);
router.delete("/", usuarioDelete);
router.patch("/", usuarioPatch);

module.exports = router;
