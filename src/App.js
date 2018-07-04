import React, { Component } from 'react';
import './App.css';
import Tab from './components/Tab'
import Input from './components/Input'

class App extends Component {
  state = {
    persons : [
      {name : "Billy", score : 0},
      {name : "Rob", score : 0},
    ]
    ,
    dataInput : ""
  }

 // recupere value dans input
  inputChange = (event) => {
    this.setState({
      dataInput : event.target.value
    })
    
  }

  // +1person
  addPlayer = () => {
    this.setState({
      persons: [...this.state.persons, {name: this.state.dataInput, score: 0}]
    })
    
  }
    
  //+ et - score
  changeScore = (operation, indexToChange) => 
  this.setState({
    persons: this.state.persons.map((person, i) => {
      if (i === indexToChange) {
        if(operation === 'incrementer') {
          return {
            ...person, score : this.state.persons[i].score+1
          } 
        } else
          return {
            ...person, score : this.state.persons[i].score-1 
        }
      }
      return person
    })
  })

  // total score
  totalScore = () => {
    let totalScore = 0;
    let tab_persons = this.state.persons
    for(let i = 0; i < tab_persons.length; i++) {
      totalScore += tab_persons[i].score;
    }
    return totalScore
  };


  render() {
    const RenderPersons = this.state.persons.map((person, i) => <Tab name={person.name} score={person.score} incrementeScore={()=>this.changeScore('incrementer', i)} decrementeScore={()=>this.changeScore('decrementer', i)}/>)
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tableau des scores</h1>
        </header>
        <div>
        <table class="table">
    <thead class="thead-dark">
    <tr>
        <th class="col-md-8">Name</th>
        <th class="col-md-2">Score</th>
        <th class="col-md-2"></th>
    </tr>
    </thead>
    <tbody>
        {RenderPersons}
    <tr>
        <td><Input btn={this.addPlayer} input={this.inputChange}/></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>TOTAL</td>
        <td>{this.totalScore()}</td>
    </tr>
    </tbody>
    </table>
        </div>
      </div>
    );
  }
}

export default App;
