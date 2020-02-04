import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '60%',
        },
    },
}));

export default function TypeText(props) {
    const classes = useStyles();
    const handleChange = event => {
        props.setAnswer(props.question.id, event.target.value)
    };
    return (
        <form className={classes.root} noValidate  autoComplete="off">
            <TextField id="standard-basic"   label="Введите ответ"  onChange={handleChange} />
        </form>
    );
}