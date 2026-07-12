const express = require("express");

const router = express.Router();

const {
  addTrain,
  searchTrain,
} = require("../controllers/trainController");

const adminProtect = require("../middleware/adminMiddleware");

router.post(
  "/add",
  adminProtect,
  addTrain
);

router.get(
  "/search",
  searchTrain
);

module.exports = router;
