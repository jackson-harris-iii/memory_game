import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from "./components/SimpleAppBar"
import CharCard from "./components/CharCard"
import characters from "./characters.json"

class App extends Component {
  state = {
    characters
  }
  render() {
    return <div className="App">
				<SimpleAppBar></SimpleAppBar>
        {
          this.state.characters.map(character =>(
            <CharCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
        ))}

			</div>;
  }
}

export default App;
