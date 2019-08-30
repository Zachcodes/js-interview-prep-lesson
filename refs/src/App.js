import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [
        {
          id: 1,
          name: 'Zach',
          position: 'Instructor'
        },
        {
          id: 2,
          name: 'Matias',
          position: 'Mentor'
        },
        {
          id: 3,
          name: 'Josh',
          position: 'Mentor'
        }
      ]
    };
    this.myRef = React.createRef();
  }

  randomizeColor = () => {
    let myDiv = this.myRef.current;
    myDiv.style.backgroundColor = `rgba(${this.randNum()}, ${this.randNum()}, ${this.randNum()})`;
    myDiv.style.color = `rgba(${this.randNum()}, ${this.randNum()}, ${this.randNum()})`;
  };

  randNum() {
    return Math.floor(Math.random() * (255 - 0)) + 0;
  }

  sortPeople = () => {
    let people = [...this.state.people];
    this.setState({ people: people.reverse() });
  };

  render() {
    return (
      <div className="App">
        <div ref={this.myRef}>
          This is some random text that will be used to demonstrate randomizing
          the color
        </div>
        <button onClick={this.randomizeColor}>Randomize Color</button>
        {this.state.people.map(p => {
          return (
            <div>
              <h1>{p.name}</h1>
              <h4>{p.position}</h4>
            </div>
          );
        })}
        <button onClick={this.sortPeople}>Reverse People</button>
      </div>
    );
  }
}

export default App;
