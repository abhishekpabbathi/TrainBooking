const Passenger = require("../models/PassengerMaster");


exports.addPassenger = async (req, res) => {

    try {

        const {
            name,
            age,
            gender,
            berthPreference
        } = req.body;



        if (!name || !age || !gender) {

            return res.status(400).json({

                message: "Passenger details required"

            });

        }



        const data = await Passenger.create({

            user: req.user.id,

            name,

            age,

            gender,

            berthPreference

        });



        res.json(data);



    }
    catch(error) {

        res.status(500).json({

            message: error.message

        });

    }

};





exports.getPassengers = async (req, res) => {


    const data = await Passenger.find({

        user: req.user.id

    });


    res.json(data);

};