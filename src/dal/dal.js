const models = require('../models/models');
const conn = require('./dbconnection')

class Dal {
    constructor(password) {
        this.conn = new conn(password).getConnection();
        this.tables = {
            character: 'got_character',
            house: 'got_house',
            specialty: 'got_specialty',
            alliance: 'got_alliance',
            char_spec: 'got_char_spec',
            ally_house: 'got_house_ally',
            ally_char:  'got_char_ally'
        }
    }

    validateTable(table) {
        const { character, house, specialty, alliance } = this.tables;
        console.log(table)
        if (table === character || table === house || table === specialty || table === alliance) {
            return true;
        } else {
            return false;
        }
    }

    async selectAll(queryTable) {
        const { character, house, specialty, alliance } = this.tables;
        return new Promise((resolve, reject) => {
            let list = [];
            this.conn.query(`SELECT * FROM ${queryTable}`, (err, results, fields) => {
                if (err) reject(err);
                else {
                    list = results.map(res => {
                        switch (queryTable) {
                            case character: return new models.CharacterModel(
                                res.id, res.fname, res.lname, res.nickname, res.gender, res.age, res.house,
                            );
                            case house: return new models.HouseModel(
                                res.id, res.name, res.sigil, res.location, res.lord_id, res.castle, res.words
                            );
                            case specialty: return new models.SpecialtyModel(res.id, res.specialty_type);
                            case alliance: return new models.AllianceModel(res.id, res.name);
                        }
                    })
                    resolve(list);
                }
            })

        })
    }

    async getHouseViewData() {
        const { house, character } = this.tables;
        let houseList = [];
        return new Promise((resolve, reject) => {
            this.conn.query(`SELECT h.id as id, name, sigil, location, CONCAT(fname,' ',lname) AS lord, castle, words  FROM ${house} h
                            LEFT JOIN ${character} c ON c.id = h.lord_id`, (err, results, fields) => {
                    if (err) reject(err);
                    else {
                        houseList = results.map(res =>
                            new models.HouseModel(res.id, res.name, res.sigil, res.location, res.lord, res.castle, res.castle)
                        );
                        resolve(houseList);
                    }
                })
        })
    }

    async getSpecViewData() {
        const { specialty, character, char_spec } = this.tables;
        let specList = [];
        return new Promise((resolve, reject) => {
            this.conn.query(`SELECT s.id AS sid, specialty_type, c.id AS cid, fname, lname, nickname, gender, age, house FROM ${specialty} s
                            INNER JOIN ${char_spec} sc ON s.id = sc.spec_id
                            INNER JOIN ${character} c ON c.id = sc.char_id`, (err, results, fields) => {
                    if (err) reject(err);
                    else {
                        specList = results.map(res =>
                            new models.SpecialtyViewModel(
                                new models.SpecialtyModel(res.sid, res.specialty_type),
                                new models.CharacterModel(res.cid, res.fname, res.lname, res.nickname, res.gender, res.age, res.house)
                            ));
                        resolve(specList);
                    }
                })
        })
    }

    async getAllyViewData() {
        console.log("welcome");
        const { alliance, character, house, ally_house, ally_char } = this.tables;
        let specList = [];
        return new Promise((resolve, reject) => {
            console.log("OK FUCK");
            this.conn.query(`SELECT h.name AS hname, a.name AS aname, location, ally_id, sigil, lord_id, castle, words, house_id FROM ${alliance} a
                            INNER JOIN ${ally_house} ac ON a.id = ac.ally_id
                            INNER JOIN ${house} h ON h.id = ac.house_id`, (err, results, fields) => {
                    if (err){
                      console.log(results);
                      console.log(err);
                      reject(err);
                    }
                    else {
                      console.log("FUCK AGAIN");
                        specList = results.map(res => {
                            console.log(res);
                            return new models.AllianceViewModel(
                                new models.AllianceModel(res.ally_id, res.aname),
                                new models.HouseModel(res.house_id, res.hname, res.sigil, res.location, res.lord_id, res.castle, res.words),
                                null
                            );
                        });
                    }
                })
            this.conn.query(`SELECT * FROM ${alliance} a
                            INNER JOIN ${ally_char} ac ON a.id = ac.ally_id
                            INNER JOIN ${character} c ON c.id = ac.char_id`, (err, results, fields) => {
                    if (err){
                      console.log(err);
                       reject(err);
                     }
                    else {
                      console.log("PUSHING...");
                        specList.push(results.map(res => {
                            console.log(res);
                            return new models.AllianceViewModel(
                                new models.AllianceModel(res.ally_id, res.name),
                                null,
                                new models.CharacterModel(res.char_id, res.fname, res.lname, res.nickname, res.gender, res.age, res.house)
                            );
                        }));
                    }
                    console.log("FUCK!!!:" + specList);
                    resolve(specList);
                })
        })
    }
}

module.exports = Dal;
