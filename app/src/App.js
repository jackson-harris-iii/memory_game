import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from "./components/SimpleAppBar"
import CharCard from "./components/CharCard"
import characters from "./characters.json"
import Wrapper from "./components/Wrapper"

class App extends Component {
  state = {
    characters,
    score: 0
  }

  updateScore = () => {
    this.setState({ score: this.state.score + 1})
  }

  render() {
    return <div className="App">
				<SimpleAppBar
          score={this.state.score}
        />
          <Wrapper>
            {
              this.state.characters.map(character =>(
                <CharCard
                  id={character.id}
                  key={character.id}
                  name={character.name}
                  image={character.image}
                  updateScore={this.updateScore}
                />
            ))}
        </Wrapper>    
			</div>;
  }
}

export default App;
