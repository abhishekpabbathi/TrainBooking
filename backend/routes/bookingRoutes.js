const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createBooking,
  myBookings,
  cancelBooking,
} = require("../controllers/bookingController");

router.post(
  "/create",
  protect,
  createBooking
);

router.get(
  "/my",
  protect,
  myBookings
);

router.put(
  "/cancel/:id",
  protect,
  cancelBooking
);

module.exports = router;
