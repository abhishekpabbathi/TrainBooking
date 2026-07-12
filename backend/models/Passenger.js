const mongoose = require("mongoose");

const passengerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  name: String,

  age: Number,

  gender: String,

  berthPreference: String,
});

module.exports = mongoose.model("Passenger", passengerSchema);
