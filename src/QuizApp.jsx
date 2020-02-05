import React from 'react';
import './App.css';
import Quiz from "./components/Quiz";
import Result from "./components/Result";
import axios from "axios";
import update from "react-addons-update";


class QuizApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showResult: false,
            questions: [],
            answers: [],
        }
        this.showResult = this.showResult.bind(this);
        this.pushData = this.pushData.bind(this);
        this.setAnswer = this.setAnswer.bind(this);
        this.checkAnswers = this.checkAnswers.bind(this);
    }

    pushData(data) {
        const answers = data.map((q) => {
            return {
                id: q.id,
                correct: q.correct,
                userAnswer: q.type === 'checkbox' ? [] : null,
            }
        })
        this.setState({
            questions: data,
            answers: answers
        });
    }

    showResult() {
        this.setState({
            showResult: true,
        })
    }

    setAnswer(qind, answer) {
        const answers = this.state.answers;
        // в случае с чекбоксом :
        if (this.state.questions[qind].type === 'checkbox') {
            if (answers[qind].userAnswer.includes(answer)) {
                let remove = answers[qind].userAnswer.indexOf(answer);
                let newarr = answers[qind].userAnswer.filter((q, i) => i !== remove);
                this.setState({
                    answers: update(answers, {[qind]: {userAnswer: {$set: newarr}}})
                })
            } else {
                this.setState({
                    answers: update(answers, {[qind]: {userAnswer: {$push: [answer]}}})
                })
            }
        } else {
            // в остальных
            this.setState({
                answers: update(answers, {[qind]: {userAnswer: {$set: answer}}})
            })
        }
    }

    checkAnswers() {
        const answers = this.state.answers || [];
        const correctUserAnswers = answers.map((q) => {
            const correct = q.correct;
            const userAnswer = q.userAnswer;
            if (Array.isArray(userAnswer)) {
                if (userAnswer.length > 0) {
                    if (userAnswer.length === correct.length) {
                        for (let i = 0; i < userAnswer.length; i++) {
                            if (correct.indexOf(userAnswer[i]) === -1) {
                                return q.id;
                            } else return true
                        }
                    } else {
                        return q.id
                    }
                } else {
                    return q.id
                }
            } else {
                if (q.userAnswer === q.correct) {
                    return true
                } else {
                    return q.id
                }
            }
        })
        this.setState({
            result: correctUserAnswers
        })
    }

    componentDidMount() {
        axios.get('http://localhost:3001/data').then(
            response => this.pushData(response.data)
        )
    }

    render() {
        console.log('new state', this.state);
        const showModal = this.state.answers.some((e) => e.userAnswer === null);
        return (
            <div className="App">
                {this.state.showResult ? <Result result={this.state.result} questions={this.state.questions}/> : <Quiz checkAnswers={this.checkAnswers}
                                                                                                                        questions={this.state.questions}
                                                                                                                        setAnswer={this.setAnswer}
                                                                                                                        showResult={this.showResult}
                                                                                                                        showModal={showModal}/>}
            </div>
        );
    }
}

export default QuizApp;
