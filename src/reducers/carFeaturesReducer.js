import {ADD_NEW_FEATURE } from "../actions/carFeaturesActions";
import {REMOVE_FEATURE} from "../actions/carFeaturesActions";

const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    }
};


export const carFeaturesReduces  = (state = initialState , action) => {
    switch(action.type){
        case ADD_NEW_FEATURE :
            return {
              ...state ,
              car : {price : state.car.price , name : state.car.name , image : state.car.image ,features : [...state.car.features ,action.payload]},
              additionalPrice : state.additionalPrice + action.payload.price
            }
        case REMOVE_FEATURE : 
        {
        console.log("Test"); 
        return {
            ...state ,
            car : [],
            additionalPrice : state.additionalPrice - action.payload.price
          }
        }
        default : 
        return state;
    }
}