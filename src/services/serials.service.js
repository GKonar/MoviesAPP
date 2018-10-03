import { Serial } from '../models/serial.model';

export default class SerialsService {
    static getSerials() {
        return new Promise((resolve, reject) => {
            Serial.find({}, (err, serials ) => {
                if (err) reject (err);
                resolve(serials);
            })
        });
    }

    static getSerial() {
        return new Promise((resolve, reject) => {
            Serial.findById(id, (err,data) => {
                if (err) reject (err);
                resolve(data);
            })
        })
    }

    static updateSerial(id, data) {
        return new Promise((resolve, reject) => {
            Serial.findByIdAndUpdate(id, {new: true}, (err, data) => { //does this true is necessary here? check
                if (err) reject (err);
                resolve(data);
            })
        })
    }

    static createSerial(data) {
        return new Promise((resolve, reject) => {
            let newSerial =  new Serial(data);
            newSerial.save((err, data) => {
                if (err) reject (err);
                resolve(data);
            })
        })
    }

    static deleteSerial(id) {
        return new Promise((resolve, reject) => {
            Serial.findByIdAndDelete(id, (err) => {
                if (err) reject (err);
                resolve(true);
            })
        })
    }
}


//More Mongoose docs = https://mongoosejs.com/docs/