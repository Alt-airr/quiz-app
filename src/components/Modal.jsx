import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Modal(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
        if (props.showModal) {
            props.checkAnswers()
        } else {
            props.checkAnswers();
            props.showResult();
        };
    }

    const handleClose = () => {
        setOpen(false);
    };

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
                    <Button onClick={() => props.showResult()} color="primary" autoFocus>
                        Да
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );

}


