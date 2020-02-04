import React from 'react';
import update from 'react-addons-update';
import data from '../data/data';
import Question from "./Question";
import '../App.css';
import Modal from "./Modal";
import {Container} from "@material-ui/core";


class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nr: 0,
            total: data.length,
            questions: data.questions,
            answers: null,
        };
        this.setAnswer = this.setAnswer.bind(this);
    }

    pushData() {
        const answers = data.map((q, index) => {
            return {
                id: index,
                correct: q.correct,
                userAnswer: q.type === 'checkbox' ? [] : null,
            }
        })
        this.setState({
            questions: data,
            answers: answers
        });
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

    componentWillMount() {
        let {nr} = this.state;
        this.pushData(nr);
    }

    render() {
        console.log('new state', this.state);
        let questions = this.state.questions.map((q, index) => <Question key={index} question={q}
                                                                         setAnswer={this.setAnswer}/>);
        return (
            <Container className="container" >
                <h1>География</h1>
                {questions}
                <Modal state={this.state} showResult={this.props.showResult}/>
            </Container>
        );
    }
};

export default Quiz
