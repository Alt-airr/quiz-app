import React from 'react';
import TypeText from "./questionTypes/TypeInput";
import TypeRadio from "./questionTypes/TypeRadio";
import TypeCheckbox from "./questionTypes/TypeCheckbox";
import TypeSelect from "./questionTypes/TypeSelect";


const Question = (props) => {
    const que = props.question;

    let questionItem = (question) => {
        switch (question.type) {
            case 'input' :
                return <TypeText question={que} setAnswer={props.setAnswer}/>
            case 'checkbox' :
                return  <TypeCheckbox question={que} setAnswer={props.setAnswer}/>
            case 'radio' :
                return  <TypeRadio question={que} setAnswer={props.setAnswer}/>
            case 'select' :
                return  <TypeSelect question={que} setAnswer={props.setAnswer}/>
            default :
                return null
        }
    }
    return <div className="question">
        <h2> {que.id + 1 + '. ' + que.text}</h2>
        {questionItem(que)}</div>;
}



export default Question;
