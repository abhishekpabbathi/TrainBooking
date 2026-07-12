const Train = require("../models/Train");


const addTrain = async (req, res) => {

    try {

        const {
            trainNumber,
            trainName,
            source,
            destination
        } = req.body;


        if (!trainNumber || !trainName || !source || !destination) {

            return res.status(400).json({
                message: "Required train details missing"
            });

        }


        const train = await Train.create({

            ...req.body,

            source: source.trim(),
            destination: destination.trim()

        });


        res.status(201).json({
            message: "Train added successfully",
            train
        });


    }
    catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};




const searchTrain = async (req, res) => {

    try {


        const {
            source,
            destination
        } = req.query;



        const trains = await Train.find({

            source: {
                $regex: source,
                $options: "i"
            },

            destination: {
                $regex: destination,
                $options: "i"
            }

        });



        if (trains.length === 0) {

            return res.status(404).json({

                message: "No trains found"

            });

        }


        res.json(trains);



    }
    catch(error) {

        res.status(500).json({
            message: error.message
        });

    }

};




module.exports = {
    addTrain,
    searchTrain
};