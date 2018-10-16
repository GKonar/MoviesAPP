import UserServices from "../../services/user.services";

export function AuthListener(req, res, next) {
    if (req.body.user) {
        const user = UserServices.getUserByUsername(username);
        if (user === req.body.user) {
            next();
        } else {
            res.status(401).send(err);
        }
    } else {
        res.status(401).send(err);
    }
}
