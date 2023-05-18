const { model, Schema } = require("mongoose");

const roleSchema = new Schema({
  name: {
    type: String,
    required: [true, "El rol es obligatorio"],
  },
});

module.exports = model("Role", roleSchema);
