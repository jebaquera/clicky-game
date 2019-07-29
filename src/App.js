// imports dependencies and files
import React, { Component } from "react";
import Nav from "./components/Nav";
import Title from "./components/Title";
import Container from "./Container";
import Row from "./Row";
import Column from "./Column";
import Wrapper from "./components/Wrapper";
import Card from "./components/Card";
// import Footer from "./components/Footer";
import popArt from "./popArt.json";
import "./App.css";


// function shufflePopArt(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// };

class App extends Component {
  // Set this.state
  state = {
    popArt,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: [],
  };
// sets state to 0 or empty


// when you click on a card ... the pop art image is taken out of the array


// if you click on a pop art image that has already been selected, the game is reset and cards reordered


// if you click on an available pop art image, your score is increased and cards reordered


// if you get all 12 pop art images correct, you get a congrats message and the game resets        


// the order of components to be rendered: nav, title, wrapper, card, footer

render() {
  return (
    <Wrapper>
      <Nav
        title="Pop Art Clicky Game"
        score={this.state.currentScore}
        topScore={this.state.topScore}
        rightWrong={this.state.rightWrong}
      />

      <Title>
        This is a memory game. Try to click on each pop art image, but don't hit any duplicates or you lose. Guess all 12 and you win!
      </Title>

      <Container>
        <Row>
          {this.state.popArt.map(popArt => (
            <Column size="md-3 sm-6">
              <Card
                key={popArt.id}
                handleClick={this.handleClick}
                handleIncrement={this.handleIncrement}
                handleReset={this.handleReset}
                handleShuffle={this.handleShuffle}
                id={popArt.id}
                image={popArt.image}
              />
            </Column>
          ))}
        </Row>
      </Container>
    </Wrapper>
  );
}
}

export default App;