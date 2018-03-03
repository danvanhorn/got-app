const models = require('../models/models');
const conn = require('./dbconnection')


const characters = 'character';
const houses = 'house';
const specialties = 'specialty';
const alliances = 'alliance';

class Dal {
    constructor(password) {
        this.conn = new conn(password).getConnection();
        this.tables = {
            character: 'got_character',
            house: 'got_house',
            specialty: 'got_specialty',
            alliance: 'got_alliance',
        }
    }

    selectAll(queryTable) {
        switch (queryTable) {
            case this.tables.character:
                // selects and returns all characters from the database
                this.conn.query(`SELECT * FROM ${this.tables.character}`, (err, results, fields) => {
                    if (err) console.log(err);
                    else {
                        return results.map(res => new models.CharacterModel(
                            res.id, res.fname, res.lname, res.nickname, res.gender, res.house,
                        ));
                    }
                })
            case this.tables.house:
                // selects and returns all characters from the database
                this.conn.query(`SELECT * FROM ${this.tables.character}`, (err, results, fields) => {
                    if (err) console.log(err);
                    else {
                        return results.map(res => new models.HouseModel(
                            res.id, res.name, res.sigil, res.location, res.lord, res.castle, res.words
                        ));
                    }
                })
        }
    }
}

module.exports = Dal;
module.exports.characters = characters;
module.exports.houses = houses;
module.exports.specialties = specialties;
module.exports.alliances = alliances;