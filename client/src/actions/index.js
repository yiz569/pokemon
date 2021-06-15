import _ from 'lodash';
import localhost from '../apis/localhost';


export const fetchTrainersAndPokemons = () => async (dispatch, getState) => {
  await dispatch(fetchTrainers());

  _.chain(getState().trainers)
    .map('Pokemon_owned')
    .split(",")
    .map(x=>parseInt(x))
    .uniq()
    .forEach(id => dispatch(fetchPokemon(id)))
    .value();
};


export const fetchTrainers = () => async dispatch => {
  const response = await localhost.get('/trainers');

  dispatch({ type: 'FETCH_TRAINERS', payload: response.data });
};

export const fetchPokemon = id => async dispatch => {
  const response = await localhost.get(`/pokemons/${id}`);

  dispatch({ type: 'FETCH_POKEMON', payload: response.data });
};

/*
export const fetchPokemon = id => dispatch => _fetchPokemon(id, dispatch);
const _fetchPokemon = _.memoize(async (id, dispatch) => {
  const response = await localhost.get(`/pokemons/${id}`);

  dispatch({ type: 'FETCH_POKEMON', payload: response.data });
});
*/
