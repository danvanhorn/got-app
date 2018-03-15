import { CharacterModel } from "../models/models";

export async function postCharacterModel(character){
  return new Promise((resolve, reject) => {
    console.log("sending ",character)
    window.fetch("api/add/got_character/",{
      method: "POST",
      body: JSON.stringify(character),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(data => resolve(data))
    .catch(err => reject(data))
  })
}

export async function fetchCharacterModels(){
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