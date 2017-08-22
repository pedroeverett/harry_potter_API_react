import React from 'react';

class CharacterSelector extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: undefined
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const newIndex = event.target.value
    this.setState({ selectedIndex: newIndex })
    const selectedCharacter = this.props.characters[newIndex]
    this.props.selectCharacter(selectedCharacter)
  }


  render() {
    const characters = this.props.characters.map(function (character, index) {
      return <option key={index} value={index}>{ character.name }</option>
    })

    return (
      <select 
        id="characters" 
        value={this.state.selectedIndex}
        onChange={this.handleChange}>
        <option>character Selector</option>
        {characters}
      </select>
    );
  }
}

module.exports = CharacterSelector;