import React from 'react';
import Question from "./Question";
import '../App.css';
import Modal from "./Modal";
import {Container} from "@material-ui/core";

const Quiz = (props) => {
        let questions = props.questions.map((q, index) => <Question key={index}
                                                                    question={q}
                                                                    setAnswer={props.setAnswer}/>);
        return (
            <Container className="container" >
                <h1>География</h1>
                {questions}
                <Modal showResult={props.showResult} showModal={props.showModal} checkAnswers={props.checkAnswers}/>
            </Container>
        );
};

export default Quiz
