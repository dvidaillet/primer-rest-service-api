const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es obligatorio"],
    },
    correo: {
      type: String,
      required: [true, "El correo es obligatorio"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "La contraseña es obligatoria"],
    },
    img: {
      type: String,
    },
    rol: {
      type: string,
      required: true,
      enum: ["ADMIN_ROLE", "USER_ROLE"],
    },
    estado: {
      type: Boolean,
      default: true,
    },
    google: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);

module.exports = model("Usuario", UsuarioSchema);
