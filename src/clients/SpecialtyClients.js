import { SpecialtyModel, SpecialtyViewModel, CharacterModel } from "../models/models";

export async function fetchSpecialtyViewModels() {
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

export async function fetchSpecialtyModels() {
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