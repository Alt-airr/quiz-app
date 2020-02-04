import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import '../App.css'

export default function Modal(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const answers = props.state.answers;
    const correctUserAnswers = answers.map((q) => {
        const correct = q.correct;
        const userAnswer = q.userAnswer;
        if (Array.isArray(userAnswer)) {
            if (userAnswer.length > 0) {
                if (userAnswer.length === correct.length) {
                    for (var i = 0; i < userAnswer.length; i++) {
                        if (correct.indexOf(userAnswer[i]) < 1) {
                            return q.id;
                        }
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

    if (answers.some((e) => e.userAnswer === null)) {
        return (
            <div>
                <Button className='btn' variant="outlined" onClick={handleClickOpen}>
                    Ответить
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle
                        id="alert-dialog-title">{"Каждый неотмеченный ответ считается неправильным, Вы уверены что хотите продолжить?"}</DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Нет
                        </Button>
                        <Button onClick={() => props.showResult(correctUserAnswers)} color="primary" autoFocus>
                            Да
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    } else {
        return <Button className='btn' variant="outlined" onClick={() => props.showResult(correctUserAnswers)}
                       color="blue">
            Ответить
        </Button>
    }


}