import React from 'react';
import { connect } from 'react-redux';
import { fetchTrainersAndPokemons } from '../actions';
import PokemonList from './PokemonList';

class TrainerList extends React.Component {
  componentDidMount() {
    this.props.fetchTrainersAndPokemons();
  }

  renderList() {
    return this.props.trainers.map(trainer => {
      const pokemon_ids = trainer.Pokemon_owned.split(",").map(x=>parseInt(x));
      return (
        <div className="item" key={trainer.Name}>
          <i className="Large top aligned icon user" />
          <div className="content">
            <div className="description">
              <h2>{trainer.Name}</h2>
            </div>
            <PokemonList pokemonId={pokemon_ids}></PokemonList>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { trainers: state.trainers };
};

export default connect(
  mapStateToProps,
  { fetchTrainersAndPokemons }
)(TrainerList);
