import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 320,
        width: '60%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export default function TypeSelect(props) {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const answers = props.question.answers.map((q, index) => <MenuItem key={index} value={q}>{q}</MenuItem>)
    React.useEffect(() => {

    }, []);

    const handleChange = event => {
        setAge(event.target.value);
        props.setAnswer(props.question.id, event.target.value)
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Выберите один из предложенных вариантов</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    onChange={handleChange}
                >
                    {answers}
                </Select>
            </FormControl>
        </div>
    );
}
