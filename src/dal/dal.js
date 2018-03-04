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

    validateTable(table){
        const {character, house, specialty, alliance} = this.tables;
        console.log(table)
        if(table === character || table === house || table === specialty || table === alliance){
            return true;
        }else{
            return false;
        }
    }

    async selectAll(queryTable) {
        const {character, house, specialty, alliance} = this.tables;
        return new Promise(resolve => {
            let result = [];
            this.conn.query(`SELECT * FROM ${queryTable}`, (err, results, fields) => {
                if (err) console.log(err);
                else {
                    result = results.map(res => {
                        switch(queryTable){
                            case character: return new models.CharacterModel(
                                res.id, res.fname, res.lname, res.nickname, res.gender, res.age, res.house,
                            );
                            case house: return new models.HouseModel(
                                res.id, res.name, res.sigil, res.location, res.lord, res.castle, res.words
                            );
                            case specialty: return new models.SpecialtyModel(res.id, res.specialty_type);
                            case alliance: return new models.AllianceModel(res.id, res.name);
                        }
                    })
                    resolve(result);
                }  
            })
            
        })

    }
}

module.exports = Dal;