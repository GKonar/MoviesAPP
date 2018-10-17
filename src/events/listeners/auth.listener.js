import UserServices from "../../services/user.services";

export function AuthListener(req, res, next) {
    if (req.body.user) {
        const user = UserServices.getUserByUsername(req.body.username);
        if (user === req.body.user) {
            next();
        } else {
            res.status(401).send({message: 'Unauthorized'});
        }
    } else {
        res.status(401).send({message: 'Unauthorized'});
    }
}
