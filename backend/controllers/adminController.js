const Admin = require("../models/Admin");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



const loginAdmin = async (req, res) => {

    try {


        const {
            email,
            password
        } = req.body;




        const admin = await Admin.findOne({ email });




        if (!admin) {

            return res.status(404).json({

                message: "Admin account not found"

            });

        }




        const valid = await bcrypt.compare(

            password,

            admin.password

        );




        if (!valid) {

            return res.status(401).json({

                message: "Invalid credentials"

            });

        }




        admin.lastLogin = new Date();


        await admin.save();





        const token = jwt.sign(

            {

                id: admin._id,

                role: "SUPER_ADMIN",

                permissions: admin.permissions

            },

            process.env.JWT_SECRET,

            {

                expiresIn: "2h"

            }

        );





        res.json({

            message: "Admin login successful",

            token,

            admin: {

                name: admin.name,

                role: "SUPER_ADMIN",

                permissions: admin.permissions

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

    loginAdmin

};