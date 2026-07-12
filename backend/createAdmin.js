require("dotenv").config();

const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Admin = require("./models/Admin");

const createAdmin = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI
    );

    const exist = await Admin.findOne({
      email: process.env.ADMIN_EMAIL,
    });

    if (exist) {
      console.log("Admin already exists");

      process.exit();
    }

    const hashedPassword = await bcrypt.hash(
      process.env.ADMIN_PASSWORD,
      10
    );

    await Admin.create({
      name: "TrainBooking Admin",
      email: process.env.ADMIN_EMAIL,
      password: hashedPassword,
      role: "SUPER_ADMIN",
    });

    console.log("Admin created successfully");

    process.exit();
  } catch (error) {
    console.log(error.message);

    process.exit(1);
  }
};

createAdmin();