import React, { Component } from 'react';
import './App.css';
import SimpleAppBar from "./components/SimpleAppBar"
import CharCard from "./components/CharCard"
import characters from "./characters.json"
import Wrapper from "./components/Wrapper"

class App extends Component {
  state = {
    characters,
    clickedCharacters: [],
    score: 0,
    highScore: 0
  }

  componentWillMount() {
    this.setState({ characters: this.__shuffle(this.state.characters) })
  }

  updateScore = () => {
    this.setState({ score: this.state.score + 1})
    this.setState({ characters: this.__shuffle(this.state.characters) });
  }

  __shuffle = (a) => {
    console.log(a)
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a
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
