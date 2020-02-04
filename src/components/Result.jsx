import React from 'react';

class Result extends React.Component {

    render() {
        const points = this.props.result.filter(i => i === true);
        const incorrect = this.props.result.filter(i => i !== true);
        let assessment = null;
        if (incorrect.length > 0) {
            assessment = <h2>
                К сожалению Вы допустили ошибку в вопросах с номерами :
                {incorrect.map(i => ` ${i + 1}, `)}</h2>
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
    }
};

export default Result
