import { HouseModel } from "../models/models";

export  function postHouseModel(house){
  return new Promise((resolve, reject) => {
    window.fetch("api/add/got_house",{
      method: "POST",
      body: JSON.stringify(house),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(data => resolve(data))
    .catch(err => reject(err))
  })
}

export  function postUpdateHouseModel(house){
  return new Promise((resolve, reject) => {
    window.fetch("api/update/got_house",{
      method: "POST",
      body: JSON.stringify(house),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(data => resolve(data))
    .catch(err => reject(err))
  })
}

export  function fetchHouseViewModels(){
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

export  function fetchHouseModels(){
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