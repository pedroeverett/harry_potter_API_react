import React from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      focusCharacter: null
    }
    this.setFocusCharacter = this.setFocusCharacter.bind(this)
  }

  setFocusCharacter(character) {
    this.setState({focusCharacter: character})
  }

  componentDidMount() {
    const url = 'http://hp-api.herokuapp.com/api/characters';
    const request = new XMLHttpRequest();

    request.addEventListener('load', function() {
      if (request.status !== 200) return
      const jsonString = request.responseText
      const data = JSON.parse(jsonString)
      this.setState({characters: data})
    }.bind(this))

    request.open('GET', url)
    request.send()
  }

  render() {
    return (
      <div>
        <h2>Character Container</h2>
        <CharacterSelector characters={this.state.characters} selectCharacter={this.setFocusCharacter.bind(this)}/>
        <CharacterDetail character={this.state.focusCharacter}/>
      </div>
      )
  }

}

module.exports = CharacterContainer;