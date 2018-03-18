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
        const { character, house, specialty, alliance, char_spec, ally_char, ally_house } = this.tables;
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
     execute(query){
        return new Promise((resolve, reject) => {
            this.conn.query(query, (err, results, fields) => {
                if (err) reject(err);
                else resolve(results);
            })
        })
    }
     findChar(category, choice){
      let query = "";
      if(category === 'fname' || category === 'lname' || category === 'house' || category === 'nickname' || category === 'gender'){
        return new Promise((resolve, reject) => {
          let list = [];
          this.conn.query(`SELECT * FROM got_character WHERE ${category} = "${choice}"`, (err, results, fields) => {
            if (err) reject(err);
            else {
              list = results.map(res => {
                return new models.CharacterModel(res.id, res.fname, res.lname, res.nickname, res.gender, res.age, res.house);
              });
              console.log(list);
              resolve(list);
            }
          });
        })
      }
      else if(category === 'AgeLessThan'){
        return new Promise((resolve, reject) => {
          let list = [];
          this.conn.query(`SELECT * FROM got_character WHERE age < "${choice}"`, (err, results, fields) => {
            if (err) reject(err);
            else {
              list = results.map(res => {
                return new models.CharacterModel(res.id, res.fname, res.lname, res.nickname, res.gender, res.age, res.house);
              });
              console.log(list);
              resolve(list);
            }
          });
        })
      }
      else if(category === 'ageGreaterThan'){
        return new Promise((resolve, reject) => {
          let list = [];
          this.conn.query(`SELECT * FROM got_character WHERE age  > "${choice}"`, (err, results, fields) => {
            if (err) reject(err);
            else {
              list = results.map(res => {
                return new models.CharacterModel(res.id, res.fname, res.lname, res.nickname, res.gender, res.age, res.house);
              });
              console.log(list);
              resolve(list);
            }
          });
        })
      }
    }

     getFromCharacter(col){
      let query = "";
      if(col === "fname"){
        query = "SELECT fname FROM got_character ORDER BY fname"
      }
      if(col === "lname"){
        query = "SELECT DISTINCT lname FROM got_character ORDER BY lname"
      }
      if(col === "house"){
        query = "SELECT DISTINCT house FROM got_character ORDER BY house"
      }
      if(col === "nickname"){
        query = "SELECT nickname FROM got_character ORDER BY nickname"
      }
      return this.execute(query);
    }

     insert(table, models) {
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

     updateHouse(house) {
        const query = `UPDATE ${this.tables.house} SET name="${house.name}",sigil="${house.sigil}",location="${house.location}",lord_id=${house.lord.id},castle="${house.castle}",words="${house.words}" WHERE id=${house.id};`;
        return this.execute(query);
    }

     deleteCharacter(char) {
      const { character } = this.tables
      const query = `DELETE FROM ${character} WHERE id=${char.id};`;
      return this.execute(query);
    }

     insertSpecialtyRelationship(specialtyVM) {
      const { char_spec } = this.tables;
      const { specialty, character } = specialtyVM;
      const query = `INSERT INTO ${char_spec}(char_id, spec_id) VALUES (${character.id},${specialty.id});`;
      return this.execute(query);
    }
    async insertAllianceCharacterRelationship(allianceVM) {
      const { ally_char } = this.tables;
      const { alliance, character } = allianceVM;
      const query = `INSERT INTO ${ally_char}(char_id, ally_id) VALUES (${character.id},${alliance.id});`;
      return this.execute(query);
    }
    async insertAllianceHouseRelationship(allianceVM) {
      const { ally_house } = this.tables;
      const { alliance, house } = allianceVM;
      const query = `INSERT INTO ${ally_house}(house_id, ally_id) VALUES (${house.id},${alliance.id});`;
      return this.execute(query);
    }


     select(queryTable) {
      const { character, house, specialty, alliance } = this.tables;
      return new Promise((resolve, reject) => {
        let list = [];
        this.conn.query(`SELECT * FROM ${queryTable}`, (err, results, fields) => {
          if (err) reject(err);
          else {
            list = results.map(res => {
              switch (queryTable) {
                case character: return new models.CharacterModel(
                  res.id, res.fname, res.lname, res.nickname, res.gender, res.age, res.house
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

     getHouseViewData() {
      const { house, character } = this.tables;
      let houseList = [];
      return new Promise((resolve, reject) => {
        this.conn.query(`SELECT h.id as id, name, sigil, location, CONCAT(fname,' ',lname) AS lord, castle, words  FROM ${house} h
        LEFT JOIN ${character} c ON c.id = h.lord_id`, (err, results, fields) => {
          if (err) reject(err);
          else {
            houseList = results.map(res =>
              new models.HouseModel(res.id, res.name, res.sigil, res.location, res.lord, res.castle, res.words)
            );
            resolve(houseList);
          }
        })
      })
    }

     getSpecViewData() {
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

         getAllyViewData() {
          const { alliance, character, house, ally_house, ally_char } = this.tables;
          let specList = [];
          return new Promise((resolve, reject) => {
            this.conn.query(`SELECT h.name AS hname, a.name AS aname, location, ally_id, sigil, lord_id, castle, words, house_id FROM ${alliance} a
              INNER JOIN ${ally_house} ac ON a.id = ac.ally_id
              INNER JOIN ${house} h ON h.id = ac.house_id`, (err, results, fields) => {
                if (err){
                  reject(err);
                }
                else {
                  specList = results.map(res => {
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
                    reject(err);
                  }
                  else {
                    specList = specList.concat(results.map(res => {
                      return new models.AllianceViewModel(
                        new models.AllianceModel(res.ally_id, res.name),
                        null,
                        new models.CharacterModel(res.char_id, res.fname, res.lname, res.nickname, res.gender, res.age, res.house)
                      );
                    }));
                  }
                  resolve(specList);
                })
              })
            }
          }

          module.exports = Dal;
