const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const USER_TYPES = {
  CONSUMER: "consumer",
  SUPPORT: "support",
};

exports.USER_TYPES = USER_TYPES;

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: () => uuidv4().replace(/\-/g, " "),
    },
    firstName: String,
    lastName: String,
    type: String,
  },
  {
    timestamps: true,
  }
);

// https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
userSchema.statics.createUser = async function (firstName, lastName, type) {
  try {
    // If use an arrow function the `this` context will be lost and it won't work
    return this.create({ firstName, lastName, type });
  } catch (error) {
    throw error;
  }
};

module.exports = mongoose.model("User", userSchema);
