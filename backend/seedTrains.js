require("dotenv").config();

const mongoose = require("mongoose");

const Train = require("./models/Train");

const trains = [
  {c
    trainNumber: "12760",
    trainName: "Charminar Express",
    source: "Hyderabad",
    destination: "Chennai",
    departure: "18:00",
    arrival: "08:00",
    availableSeats: 120,
    classes: [
      "Sleeper",
      "3A",
      "2A",
    ],
    quota: [
      "General",
      "Tatkal",
    ],
  },

  {
    trainNumber: "12604",
    trainName: "Chennai Express",
    source: "Hyderabad",
    destination: "Chennai",
    departure: "17:30",
    arrival: "06:45",
    availableSeats: 150,
    classes: [
      "Sleeper",
      "3A",
    ],
    quota: [
      "General",
    ],
  },

  {
    trainNumber: "12723",
    trainName: "Telangana Express",
    source: "Hyderabad",
    destination: "Delhi",
    departure: "06:00",
    arrival: "14:00",
    availableSeats: 200,
    classes: [
      "Sleeper",
      "3A",
      "2A",
    ],
    quota: [
      "General",
    ],
  },

  {
    trainNumber: "17023",
    trainName: "Hyderabad Mumbai Express",
    source: "Hyderabad",
    destination: "Mumbai",
    departure: "20:00",
    arrival: "12:00",
    availableSeats: 100,
    classes: [
      "Sleeper",
      "3A",
    ],
    quota: [
      "General",
    ],
  },
];

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    await Train.deleteMany();

    await Train.insertMany(trains);

    console.log("Trains Added");

    process.exit();
  })
  .catch((error) => {
    console.log(error);
  });
