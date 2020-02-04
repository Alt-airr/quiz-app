import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from "@material-ui/core/FormLabel";


const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(3),
    },
}));

export default function TypeCheckbox(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState('female');
    const handleChange = event => {
        setValue(event.target.value);
        props.setAnswer(props.question.id, event.target.value)
    };
    const answers = props.question.answers.map((q, index )=>  <FormControlLabel key={index} value={q} control={<Radio />} label={q} />)

    return (
        <div>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Выберите только один ответ</FormLabel>
                <RadioGroup value={value} onChange={handleChange}>
                    {answers}
                </RadioGroup>
            </FormControl>
        </div>
    );
}
