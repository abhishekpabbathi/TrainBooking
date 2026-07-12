const express = require("express");

const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  addPassenger,
  getPassengers,
} = require("../controllers/passengerController");

router.post(
  "/",
  protect,
  addPassenger
);

router.get(
  "/",
  protect,
  getPassengers
);

module.exports = router;
