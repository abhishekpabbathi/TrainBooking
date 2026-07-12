const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    train: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Train",
    },

    passengers: [
      {
        name: String,
        age: Number,
        gender: String,
        berthPreference: String,
      },
    ],

    paymentStatus: {
      type: String,
      default: "Pending",
    },

    bookingStatus: {
      type: String,
      default: "Confirmed",
    },

    pnr: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
