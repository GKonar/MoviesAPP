import * as jwt from 'jsonwebtoken';
import UserServices from "../../services/user.services";

export function JWTListener(req, res, next) {
    if (typeof req.header('Authorization') !== 'undefined' && req.header('Authorization').startsWith('Bearer')) {
        return req.header('Authorization').split(' ')[1];

        const headerToken = req.header('Authorization').split(' ')[1];

        jwt.verify(headerToken, 'shhhhh', function(err, decodedToken) { // Asynchronous
             if (typeof decodedToken !== 'undefined') {
                const user = UserServices.getUserByUsername(decodedToken.username);
                if(user) {
                    req.body.user = user;
                }
            }
        });
    }
    next();
}

