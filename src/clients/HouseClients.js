import { HouseModel } from "../models/models";

export async function postHouseModel(house){
  return new Promise((resolve, reject) => {
    window.fetch("api/add/got_house",{
      method: "POST",
      body: JSON.stringify(house),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(data => resolve(data))
    .catch(err => reject(data))
  })
}

export async function fetchHouseViewModels(){
    return new Promise((resolve, reject) => {
        let houseArray = [];
        window.fetch("api/view/got_house")
        .then(response => response.json())
        .then(data => {
          data.forEach(house => {
            houseArray.push(
              new HouseModel(
                house.id,
                house.name,
                house.sigil,
                house.location,
                house.lord,
                house.castle,
                house.words
              )
            );
          });
          resolve(houseArray); 
        })
        .catch(error => reject(error));
               
    })
} 

export async function fetchHouseModels(){
  return new Promise((resolve, reject) => {
      let houseArray = [];
      window.fetch("api/get/got_house")
      .then(response => response.json())
      .then((data) => {
        data.forEach(house => {
          houseArray.push(
            new HouseModel(
              house.id,
              house.name,
              house.sigil,
              house.location,
              house.lord,
              house.castle,
              house.words
            )
          );
        });
        resolve(houseArray); 
      })
      .catch(error => reject(error));
             
  })
} 