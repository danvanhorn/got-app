import { CharacterModel } from "../models/models";

export function postCharacterModel(character) {
  return new Promise((resolve, reject) => {
    window.fetch("api/add/got_character/", {
      method: "POST",
      body: JSON.stringify(character),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => resolve(res))
      .catch(err => reject(data))
  })
}

export function deleteCharacterModel(character) {
  return new Promise((resolve, reject) => {
    window.fetch("api/delete/got_character", {
      method: "POST",
      body: JSON.stringify(character),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => resolve(res))
      .catch(err => reject(err))
  })
};

export function fetchCharacterModels() {
  return new Promise((resolve, reject) => {
    let characterArray = [];
    window
      .fetch("api/get/got_character")
      .then(response => response.json())
      .then(data => {
        data.forEach(char => {
          characterArray.push(
            new CharacterModel(
              char.id,
              char.fname,
              char.lname,
              char.nickname,
              char.gender,
              char.age,
              char.house
            )
          );
        });
        resolve(characterArray);
      })
      .catch(error => reject(error));
  })
}
export function findCharacters(category, choice) {
  return new Promise((resolve, reject) => {
    let characterArray = [];
    window
      .fetch(`/api/find_char/${category}/${choice}`)
      .then(response => response.json())
      .then(data => {
        data.forEach(char => {
          characterArray.push(
            new CharacterModel(
              char.id,
              char.fname,
              char.lname,
              char.nickname,
              char.gender,
              char.age,
              char.house
            )
          );
        });
        resolve(characterArray);
      })
      .catch(error => reject(error));
  })
}

export function SearchCharacter(column) {
  return new Promise((resolve, reject) => {
    let columnArray = []
    window
      .fetch(`api/get_char/${column}`)
      .then(response => response.json())
      .then(data => resolve(data))
      .catch(error => reject(error));

  })
}
