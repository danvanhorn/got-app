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
        const { character, house, specialty, alliance, char_spec, ally_char, ally_spec } = this.tables;
        if (table === character ||
            table === house ||
            table === specialty ||
            table === alliance ||
            table === char_spec ||
            table === ally_house ||
            table === ally_char) {
            return true;
        } else {
            return false;
        }
    }
    
    // build the query and pass it in as an argument here
    async execute(query){
        return new Promise((resolve, reject) => {
            this.conn.query(query, (err, results, fields) => {
                if (err) reject(err);
                else resolve(results);
            })
        })
    }

    async insert(table, models) {
        const { character, house, specialty, alliance } = this.tables;
        let query = "";
        if (table === character) {
            query = `INSERT INTO ${character}(fname, lname, nickname, gender, age, house) VALUES
                    ("${models.fname}","${models.lname}","${models.nickname}","${models.gender}","${models.age}","${models.house.name}");`;
        } else if (table === house) {
            query = `INSERT INTO ${house}(name, sigil, location, lord_id, castle, words) VALUES
                    ("${models.name}","${models.sigil}","${models.location}",${models.lord.id},"${models.castle}","${models.words}");`;
        } else if (table === alliance) {
            query = `INSERT INTO ${alliance}(name) VALUES ("${models.name}");`;
        } else if (table === specialty) {
            query = `INSERT INTO ${specialty}(specialty_type) VALUES ("${models.specialty_type}");`;
        }
        return this.execute(query);
    }

    async updateCharacter(char) {
        const { character } = this.tables;
        const query = `UPDATE ${character} SET id=${char.id},fname=${char.fname},lname=${char.lname},nickname=${char.nickname},gender=${char.gender},age=${char.age},house=${char.house} WHERE 1`;
        return this.execute(query);
    }

    async deleteCharacter(char) {
        const { character } = this.tables
        const query = `DELETE FROM ${character} WHERE id=${char.id};`;
        return this.execute(query);
    }

    async insertSpecialtyRelationship(specialtyVM) {
        const { char_spec } = this.tables;
        const { specialty, character } = specialtyVM;
        const query = `INSERT INTO ${char_spec}(char_id, spec_id) VALUES (${character.id},${specialty.id});`;
        return this.execute(query);
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