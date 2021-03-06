class CharacterModel {
    constructor(id, fname, lname, nickname, gender, age, house) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.nickname = nickname;
        this.gender = gender;
        this.age = age;
        this.house = house;
    }
}

class HouseModel {
    constructor(id, name, sigil, location, lord, castle, words) {
        this.id = id;
        this.name = name;
        this.sigil = sigil;
        this.location = location;
        this.lord = lord;
        this.castle = castle;
        this.words = words;
    }
}

class SpecialtyModel {
    constructor(id, specialty_type) {
        this.id = id;
        this.specialty_type = specialty_type;
    }
}

class AllianceModel {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

class SpecialtyViewModel {
    constructor(specialty, character) {
        this.specialty = new SpecialtyModel(specialty.id, specialty.specialty_type);
        this.character = new CharacterModel(character.id, character.fname, character.lname, character.nickname, character.gender, character.age, character.house);
    }
}

class AllianceViewModel {
    constructor(ally, house, char) {
        this.alliance = new AllianceModel(ally.id, ally.name);
        this.house = house && house !== undefined ? new HouseModel(house.id, house.name, house.sigil, house.location, house.lord, house.castle, house.words) : undefined;
        this.character = char && char !== undefined ? new CharacterModel(char.id, char.fname, char.lname, char.nickname, char.gender, char.age, char.house) : undefined;
    }
}

module.exports = {
    CharacterModel,
    HouseModel,
    SpecialtyModel,
    SpecialtyViewModel,
    AllianceModel,
    AllianceViewModel
}
