export class CharacterModel {
    constructor(id,fname,lname,nickname,gender,age,house_id){
        this.c_id = id;
        this.fname = fname;
        this.lname = lname;
        this.nickname = nickname;
        this.gender = gender;
        this.age = age;
        this.house_id = house_id;
    }
}

export class HouseModel {
    constructor(id,name,sigil,location,lord_id,castle,words){
        this.h_id = id;
        this.name = name;
        this.sigil = sigil;
        this.location = location;
        this.lord_id = lord_id;
        this.castle = castle;
        this.words = words;       
    }
}

export class SpecialtyModel {
    constructor(id, specialty_type){
        this.s_id = id;
        this.specialty_type = specialty_type;
    }
}

export class AllianceModel {
    constructor(id, specialty_type){
        this.a_id = id;
        this.name = specialty_type;
    }
}