import React from 'react';
import { connect } from 'react-redux';

class PokemonList extends React.Component {

  renderList() {
    const { pokemon } = this.props;
    //console.log(pokemon);
    
    return pokemon.map(pokemon => {
      return (
        <div className="item" key={pokemon.ID}>
          <div className="content">
            <div className="description">
              <h3>{pokemon.Name} Type {pokemon.Type} - {pokemon.Move}</h3>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    const { pokemon } = this.props;
    if (!pokemon) {
      return null;
    }

    return <div className="ui relaxed divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { pokemon: state.pokemons.filter(pokemon => ownProps.pokemonId.includes(pokemon.ID)) };
};

export default connect(mapStateToProps)(PokemonList);
