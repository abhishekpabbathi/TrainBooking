const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const signup = async (req, res) => {

    try {


        const {
            name,
            email,
            password,
            phone
        } = req.body;



        if (!name || !email || !password) {

            return res.status(400).json({

                message: "All fields are required"

            });

        }




        const existUser = await User.findOne({ email });



        if (existUser) {

            return res.status(400).json({

                message: "User already exists"

            });

        }




        const hashedPassword = await bcrypt.hash(password, 10);




        const user = await User.create({

            name,

            email,

            password: hashedPassword,

            phone

        });




        res.status(201).json({

            message: "Signup successful",

            user: {

                id: user._id,

                name: user.name,

                email: user.email

            }

        });



    }
    catch(error) {

        res.status(500).json({

            message: error.message

        });

    }

};






const login = async (req, res) => {

    try {


        const {
            email,
            password
        } = req.body;




        const user = await User.findOne({ email });




        if (!user) {

            return res.status(404).json({

                message: "User not found"

            });

        }




        const match = await bcrypt.compare(

            password,

            user.password

        );




        if (!match) {

            return res.status(401).json({

                message: "Invalid password"

            });

        }




        const token = jwt.sign(

            {

                id: user._id,

                name: user.name,

                email: user.email

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "1d"

            }

        );




        res.json({

            message: "Login successful",

            token,

            user: {

                id: user._id,

                name: user.name,

                email: user.email,

                role: user.role

            }

        });



    }
    catch(error) {

        res.status(500).json({

            message: error.message

        });

    }

};






module.exports = {

    signup,

    login

};