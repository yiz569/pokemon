import { combineReducers } from 'redux';
import trainersReducer from './trainersReducer';
import pokemonsReducer from './pokemonsReducer';

export default combineReducers({
  trainers: trainersReducer,
  pokemons: pokemonsReducer
});
