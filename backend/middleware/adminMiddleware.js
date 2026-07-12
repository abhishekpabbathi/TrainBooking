const jwt = require("jsonwebtoken");


const adminProtect = (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;


        if (!authHeader) {

            return res.status(401).json({
                message: "Admin token required"
            });

        }


        const token = authHeader.split(" ")[1];


        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );


        if (decoded.role !== "SUPER_ADMIN") {

            return res.status(403).json({
                message: "Admin access denied",
                role: decoded.role
            });

        }


        req.admin = decoded;


        next();


    }
    catch(error) {

        return res.status(401).json({
            message: "Invalid admin session"
        });

    }

};


module.exports = adminProtect;