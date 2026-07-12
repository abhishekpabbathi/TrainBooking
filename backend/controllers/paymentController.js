const Payment = require("../models/Payment");


exports.makePayment = async (req, res) => {

    try {


        if (
            !req.body.booking ||
            !req.body.method ||
            !req.body.amount
        ) {

            return res.status(400).json({

                message: "Payment details required"

            });

        }



        const payment = await Payment.create({

            user: req.user.id,

            booking: req.body.booking,

            method: req.body.method,

            amount: req.body.amount,

            status: "Success"

        });



        res.json({

            message: "Payment Successful",

            payment

        });



    }
    catch(error) {

        res.status(500).json({

            message: error.message

        });

    }

};