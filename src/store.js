import { useActionState } from "react";

export const initialStore=()=>{
  return{
    message: null,
    people: [],
    planets: [],
    vehicles: [],
    favorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'import':

      return { ...store, people: action.payload.people, planets: action.payload.planets, vehicles: action.payload.vehicles};

    case 'add_favorite':
  if (store.favorites.find(fav => fav.name === action.payload.name)) {
    return store
  }
  else {
    return {
    ...store,
    favorites: [...store.favorites, action.payload],
  };}

  case 'remove_favorite':
  return {
    ...store,
    favorites: store.favorites.filter((_, i) => i !== action.payload)
  };

    default:
      throw Error('Unknown action.');
  }    
}
