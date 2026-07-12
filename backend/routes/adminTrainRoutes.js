const express = require("express");

const router = express.Router();

const {
  addTrain,
} = require("../controllers/trainController");

const adminProtect = require("../middleware/adminMiddleware");

const permissionCheck = require("../middleware/permissionMiddleware");

router.post(
  "/add",
  adminProtect,
  permissionCheck("ADD_TRAIN"),
  addTrain
);

module.exports = router;
