import React from 'react';
import './App.css';
import Quiz from "./components/Quiz";
import Result from "./components/Result";


  class QuizApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        showResult: false
      }
      this.showResult=this.showResult.bind(this)
    }

    showResult(result){
      this.setState({
          showResult : true,
          result : result
      })
    }

    render() {
      return (
          <div className="App">
            { this.state.showResult ? <Result result={this.state.result}/> : <Quiz showResult={this.showResult}/>  }
          </div>
      );
    }
  }

export default QuizApp;
