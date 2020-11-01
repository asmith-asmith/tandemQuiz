import React, { Component } from 'react';
import Apprentice_TandemFor400_Data from '../../data/Apprentice_TandemFor400_Data.json'
import './App.css';
import QuestionPage from '../../pages/QuestionPage/QuestionPage.jsx';
import ScoreCard from '../../components/ScoreCard/ScoreCard';


class App extends Component {
  /*--- State ---*/
  state = {
    questions: [],
    score: 0,
    wrong: 0
  }
  /*--- Handle Methods ---*/
  handleClick = async clickId =>{
    if(clickId === 0)this.setState({score: this.state.score+1})
    if(clickId === 1) this.setState({wrong: this.state.wrong+1})
  }

  /*--- Lifecycle Methods ---*/
  async componentDidMount(){
    const newQuestions = Apprentice_TandemFor400_Data
    this.setState({questions: newQuestions})
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          Tandem
        </header>
        <main>
          <ScoreCard
            score={this.state.score}
            wrong={this.state.wrong}
          />
          <QuestionPage
                  questions={this.state.questions}
                  handleClick={this.handleClick}
          /> 
        </main>
      </div>
      
    );
  }
}

export default App;
