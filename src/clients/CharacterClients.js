import { CharacterModel } from "../models/models";

export async function fetchCharacterModels(){
    return new Promise((resolve, reject) => {
        let characterArray = [];
        window
          .fetch("api/get/got_character")
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
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
          .catch(function(error) {
            reject(error);
          });
    })
  } 