import {User} from '../models/user.model';

export default class UsersServices {
    static addUser(data) {
        return new Promise((resolve, reject) => {
            let newUser = new User(data);
            newUser.save((err, data) => {
                if (err) reject(err);
                resolve(data);
            })
        })
    }
}