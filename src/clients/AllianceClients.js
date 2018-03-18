import { AllianceModel, AllianceViewModel, CharacterModel, HouseModel } from "../models/models"

export async function postAllianceModel(ally){
  return new Promise((resolve, reject) => {
    window.fetch("api/add/got_alliance", {
      method: "POST",
      body: JSON.stringify(ally),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => resolve(res))
      .catch(err => reject(data))
  })
}

export async function addAllyHouseRel(ally){
  return new Promise((resolve, reject) => {
    window.fetch("api/rel/got_house_ally", {
      method: "POST",
      body: JSON.stringify(ally),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => resolve(res))
      .catch(err => reject(data))
  })
}
export async function addAllyCharRel(ally){
  return new Promise((resolve, reject) => {
    window.fetch("api/rel/got_char_ally", {
      method: "POST",
      body: JSON.stringify(ally),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(res => resolve(res))
      .catch(err => reject(data))
  })
}

export async function getAlliances(){
  return new Promise((resolve, reject) => {
    window.fetch("api/get/got_alliance")
    .then(res => res.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
  });
}
