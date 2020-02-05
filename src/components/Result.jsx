import React from 'react';

const Result = (props) => {
        const points = props.result.filter(i => i === true);
        const incorrect = props.result.filter(i => i !== true);
        const incorAnswers = props.questions.filter(i => incorrect.includes(i.id));
        let assessment = null;
        if (incorrect.length > 0) {
            assessment = <h2>
                <p>К сожалению Вы допустили ошибку в вопросах с номерами :
                    {incorrect.map(i => i + 1).join(', ')}
                </p>
                Правильными ответами в данных вопрос были:
                {incorAnswers.map((i, key) => <div key={key}>
                        {i.id + 1} : {Array.isArray(i.correct) ? i.correct.join(', ') : i.correct}
                    </div>
                )}
            </h2>
        } else {
            assessment = <h2>Поздравлем, Ваши познания Географии - блестательны! </h2>
        }
        return (
            <div className="container">
                <h1>Количество набранных Вами баллов составило
                    {' ' + points.length + ' '} </h1>
                {assessment}
            </div>
        );
};

export default Result
