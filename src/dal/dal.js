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
            ally_house: 'got_ally_house',
            ally_char: 'got_ally_char'
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

    async insert(table, models) {
        const { character, house, specialty, alliance } = this.tables;
        return new Promise((resolve, reject) => {
            console.log(models);
            let response = null;
            let query = "";
            if (table === character) {
                query = `INSERT INTO ${character}(fname, lname, nickname, gender, age, house) VALUES
                        ("${models.fame}","${models.lname}","${models.nickname}","${models.gender}","${models.age}","${models.house.name}");`;
            } else if (table === house) {
                query = `INSERT INTO ${house}(name, sigil, location, lord_id, castle, words) VALUES
                        ("${models.name}","${models.sigil}","${models.location}",${models.lord.id},"${models.castle}","${models.words}");`;
            } else if (table === alliance) {
                query = `INSERT INTO ${alliance}(name) VALUES
                        (${models.name});`;
            } else if (table === specialty) {
                query = `INSERT INTO ${specialty}(specialty_type) VALUES
                        (${models.specialty_type});`;
            }
            this.conn.query(query, (err, results, fields) => {
                console.log(results)
                if (err) reject(err);
                else resolve(results);
            })
        })
    }

    async select(queryTable) {
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

    // async getAllyViewData() {
    //     const { alliance, character, char_spec } = this.tables;
    //     let specList = [];
    //     return new Promise((resolve, reject) => {
    //         this.conn.query(`SELECT * FROM ${specialty} s 
    //                         INNER JOIN ${char_spec} sc ON s.id = sc.spec_id
    //                         INNER JOIN ${character} c ON c.id = sc.char_id`, (err, results, fields) => {
    //                 if (err) reject(err);
    //                 else {
    //                     specList = results.map(res => {
    //                         console.log(res);
    //                         return new models.SpecialtyViewModel(
    //                             new models.SpecialtyModel(res.sid, res.specialty_type),
    //                             new models.CharacterModel(res.cid, res.fname, res.lname, res.nickname, res.gender, res.age, res.house)
    //                         );
    //                     });
    //                     resolve(specList);
    //                 }
    //             })
    //     })
    // }
}

module.exports = Dal;