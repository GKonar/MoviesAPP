import * as jwt from 'jsonwebtoken';
import UserServices from "../../services/user.services";

export function JWTListener(req, res, next) {
    if (typeof req.header('Authorization') !== 'undefined' && req.header('Authorization').startsWith('Bearer')) {

        const headerToken = req.header('Authorization').split(' ')[1];

        jwt.verify(headerToken, 'shhhhh', function (err, decodedToken) {
            if (typeof decodedToken !== 'undefined') {
                UserServices.getUserByUsername(decodedToken.user.username)
                    .then((user) => {
                        if (user) {
                            req.body.user = user;
                            next();
                        }
                    })
                    .catch(() => next())
            }
        });
    } else {
        next();
    }
}

