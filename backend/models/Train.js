const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema(
  {
    trainNumber: {
      type: String,
      required: true,
      unique: true,
    },

    trainName: {
      type: String,
      required: true,
    },

    source: {
      type: String,
      required: true,
    },

    destination: {
      type: String,
      required: true,
    },

    departure: {
      type: String,
    },

    arrival: {
      type: String,
    },

    classes: {
      type: Array,
      default: ["SL", "3A", "2A"],
    },

    totalSeats: {
      type: Number,
      default: 100,
    },

    availableSeats: {
      type: Number,
      default: 100,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Train", trainSchema);
