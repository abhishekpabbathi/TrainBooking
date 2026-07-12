const Booking = require("../models/Booking");
const Train = require("../models/Train");


const createBooking = async (req, res) => {

    try {


        const selectedTrain = await Train.findById(req.body.train);



        if (!selectedTrain) {

            return res.status(404).json({

                message: "Train not found"

            });

        }




        if (!req.body.passengers || req.body.passengers.length === 0) {

            return res.status(400).json({

                message: "Passenger details required"

            });

        }




        if (selectedTrain.availableSeats < req.body.passengers.length) {

            return res.status(400).json({

                message: "Not enough seats available"

            });

        }




        selectedTrain.availableSeats -= req.body.passengers.length;


        await selectedTrain.save();




        const pnr = "TB" + Date.now();




        const booking = await Booking.create({

            user: req.user.id,

            train: req.body.train,

            passengers: req.body.passengers,

            paymentStatus: "Success",

            bookingStatus: "Confirmed",

            pnr

        });




        res.status(201).json({

            message: "Booking Confirmed",

            booking

        });



    }
    catch(error) {

        res.status(500).json({

            message: error.message

        });

    }


};






const myBookings = async (req, res) => {

    try {


        const bookings = await Booking.find({

            user: req.user.id

        })
        .populate("train");




        res.json(bookings);



    }
    catch(error) {

        res.status(500).json({

            message: error.message

        });

    }


};






const cancelBooking = async (req, res) => {


    try {


        const booking = await Booking.findById(req.params.id);




        if (!booking) {

            return res.status(404).json({

                message: "Booking not found"

            });

        }





        if (booking.bookingStatus === "Cancelled") {

            return res.status(400).json({

                message: "Ticket already cancelled"

            });

        }




        const train = await Train.findById(booking.train);




        if (train) {

            train.availableSeats += booking.passengers.length;

            await train.save();

        }




        booking.bookingStatus = "Cancelled";


        await booking.save();




        res.json({

            message: "Ticket Cancelled"

        });



    }
    catch(error) {

        res.status(500).json({

            message: error.message

        });

    }


};






module.exports = {

    createBooking,

    myBookings,

    cancelBooking

};