import * as jwt from 'jsonwebtoken';
import UserServices from "../../services/user.services";

export function JWTListener(req, res, next) {
    if (typeof req.header('Authorization') !== 'undefined' && req.header('Authorization').startsWith('Bearer')) {
        return req.header.authorization.split(' ')[1];

        const headerToken = req.header.authorization.split(' ')[1];
        const decodedToken = jwt.decode(headerToken, {complete: true}); // using complete?

        if (decodedToken !== undefined) {
            const user = UserServices.getUserByUsername(decodedToken.username);

            if (user !== undefined) {
                const user = req.body.user;
            }
        }
    }
    next();
}

