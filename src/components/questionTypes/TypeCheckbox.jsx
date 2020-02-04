import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

export default function TypeCheckbox(props) {
    const classes = useStyles();

    const handleChange = event => {
        props.setAnswer(props.question.id, event.target.value)
    };

    const answers = props.question.answers.map((q, index) => <FormControlLabel key={index} control={<Checkbox key={index} value={q}/>} label={q}/>)

    return (
        <div className={classes.root}>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Выберите один или несколько ответов</FormLabel>
                <FormGroup onChange={handleChange}>
                    {answers}
                </FormGroup>
            </FormControl>
        </div>
    );
}

