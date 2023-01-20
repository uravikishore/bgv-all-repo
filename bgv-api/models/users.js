const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
  },

  passwordHash: {
    type: String,
    require: true,
  },

  isAdmin: {
    type: Boolean,
    require: true,
  },
});

User = mongoose.model("User", userSchema);

module.exports = User;
