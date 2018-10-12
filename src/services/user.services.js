import {User} from '../models/user.model';

export default class UserServices {
    static addUser(data) {
        return new Promise((resolve, reject) => {
            let newUser = new User(data);
            newUser.save((err, data) => {
                if (err) reject(err);
                resolve(data);
            })
        })
    }

    static getUserByUsername(username) {
        return new Promise((resolve, reject) => {
               User.findOne({username}, (err, data) => { //object, cb
                    if (err) reject (err);
                    resolve(data);
               })
        })
    }
}
