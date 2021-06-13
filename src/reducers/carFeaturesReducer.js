import {ADD_NEW_FEATURE, removeFeature } from "../actions/carFeaturesActions";
import {REMOVE_FEATURE} from "../actions/carFeaturesActions";

const initialState = {
    car: [
    {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: [],
      additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1500 },
        { id: 2, name: 'Racing detail package', price: 1500 },
        { id: 3, name: 'Premium sound system', price: 500 },
        { id: 4, name: 'Rear spoiler', price: 250 }
      ],
      additionalPrice: 0,
    },
    {
      price: 12000,
      name: '2003 Ford Focus',
      image:
        'https://img.drivemag.net/media/default/0001/98/2019-ford-focus-st-8302-default-large.jpeg',
      features: [],
      additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1000 },
        { id: 2, name: 'Racing detail package', price: 1200 },
        { id: 3, name: 'Premium sound system', price: 400 },
        { id: 4, name: 'Rear spoiler', price: 200 }
      ],
      additionalPrice: 0,
    },
    {
      price: 17000,
      name: '2010 Ford Fiesta',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/f/f5/2010_Ford_Fiesta_Edge_1.2_Front.jpg',
      features: [],
      additionalFeatures: [
        { id: 1, name: 'V-6 engine', price: 1200 },
        { id: 2, name: 'Racing detail package', price: 1000 },
        { id: 3, name: 'Premium sound system', price: 470 },
        { id: 4, name: 'Rear spoiler', price: 235 }
      ],
      additionalPrice: 0,
    }
    ]
};


export const carFeaturesReduces  = (state = initialState , action) => {
    switch(action.type){
        case ADD_NEW_FEATURE :
            const newCar = state.car.map( (item) => {
              if(item.additionalFeatures.find(addFeature => addFeature === action.payload)){
                item.features.push(action.payload);
                item.additionalPrice = item.additionalPrice + action.payload.price;
              }
              return item;
            }) 
            return {
              car : newCar
            }
        case REMOVE_FEATURE : 
        {
          const newCar = state.car.map( (item) => {
            if(item.features.find(removeFeature => removeFeature === action.payload)){
              item.features = item.features.filter( remove => remove !== action.payload);
              item.additionalPrice = item.additionalPrice - action.payload.price;
            }
            return item;
          }) 
        return {
          car : newCar
          }
        }
        default : 
        return state;
    }
}