import { SpecialtyModel, SpecialtyViewModel, CharacterModel } from "../models/models";

export  function postSpecialtyModel(specialty){
  return new Promise((resolve, reject) => {
    window.fetch("api/add/got_specialty",{
      method: "POST",
      body: JSON.stringify({specialty_type: specialty}),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(data => resolve(data))
    .catch(err => reject(data))
  })
}

export  function postSpecialtyViewModel(specialty, character){
  return new Promise((resolve, reject) => {
    window.fetch("api/rel/got_char_spec",{
      method: "POST",
      body: JSON.stringify(specialty),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(data => resolve(data))
    .catch(err => reject(data))
  })
}

export  function fetchSpecialtyViewModels() {
  return new Promise((resolve, reject) => {
    let specList = [];
    window
      .fetch("api/view/got_specialty")
      .then(response => response.json())
      .then(data => {
        data.forEach(s =>
          specList.push(
            new SpecialtyViewModel(
              new SpecialtyModel(s.specialty.id, s.specialty.specialty_type),
              new CharacterModel(
                s.character.id,
                s.character.fname,
                s.character.lname,
                s.character.nickname,
                s.character.gender,
                s.character.age,
                s.character.house
              )
            )
          )
        );
        resolve(specList);
      })
      .catch(error => reject(error));
  })
}

export  function fetchSpecialtyModels() {
  return new Promise((resolve, reject) => {
    let specList = [];
    window
      .fetch("api/get/got_specialty")
      .then(response => response.json())
      .then(data => {
        data.forEach(t => specList.push(new SpecialtyModel(t.id, t.specialty_type)));
        resolve(specList);
      })
      .catch(error => reject(error));
  })
} 