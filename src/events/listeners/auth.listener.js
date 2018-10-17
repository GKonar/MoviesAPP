import UserServices from "../../services/user.services";

export function AuthListener(req, res, next) {
    if (req.originalUrl !== '/auth') {
        if (req.body.user) {
            UserServices.getUserByUsername(req.body.user.username)
                .then(() => {
                    next();
                })
                .catch(() => res.status(401).send({message: 'Unauthorized'}));
        } else {
            res.status(401).send({message: 'Unauthorized'});
        }
    } else {
        next();
    }
}
