import {createObjectId} from 'pow-mongodb-fixtures';
import bcrypt from 'bcrypt';

export default {
    users: [
        {
            id: createObjectId(),
            username: "Janek",
            password: bcrypt.hashSync("spoko", 10),
            firstName: "Jan",
            secondName: "Nek",
            email: "how@areu.pl"
        },
        {
            id: createObjectId(),
            username: "Czlowieknusz",
            password: bcrypt.hashSync("cebulowy", 10),
            firstName: "Janusz",
            secondName: "Kaczmarek",
            email: "try@beatit.pl"
        }
    ]
}