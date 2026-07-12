const permissionCheck = (requiredPermission) => {

    return (req, res, next) => {

        if (!req.admin) {

            return res.status(401).json({
                message: "Unauthorized"
            });

        }


        if (
            !req.admin.permissions.includes(requiredPermission)
        ) {

            return res.status(403).json({
                message: "Permission denied"
            });

        }


        next();

    };

};


module.exports = permissionCheck;