import React from 'react';

class CharacterDetail extends React.Component {

  render() {
    if (!this.props.character) return null

    return (
      <div>
      <h3>
        Name: {this.props.character.name}
      </h3>
      <h3> House: {this.props.character.house}</h3>
      <img src={this.props.character.image} />
      </div>
      )
  }

}

module.exports = CharacterDetail;