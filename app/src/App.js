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
    //shuffles characters on initial page load.
    this.setState({ characters: this.__shuffle(this.state.characters) })
  }

  updateScore = id => {
    let clickedCharacter = this.state.characters.find((character) => character.id == id);
    console.log(this.state.clickedCharacters)
    //checks to see if characters have been clicked previously
    if (this.__inArray(clickedCharacter, this.state.clickedCharacters)){
      this.setState({ score: 0 })
      this.setState({ clickedCharacters: [] })
      this.setState({ characters: this.__shuffle(this.state.characters)})
    }
    else {
      let alreadyClicked = this.state.clickedCharacters
      alreadyClicked.push(clickedCharacter);
      this.setState({ clickedCharacters: alreadyClicked })
      console.log(this.state.clickedCharacters)
      //updates score on character click
      this.setState({ score: this.state.score + 1 })

      //shuffles characters on character click
      this.setState({ characters: this.__shuffle(this.state.characters) });
    }
  }

  __shuffle = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a
}

  __inArray = (obj, list) => {
    var i;
    for (i = 0; i < list.length; i++) {
      if (list[i] === obj) {
        return true;
      }
    }

    return false;
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
