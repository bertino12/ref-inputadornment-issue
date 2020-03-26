/* eslint-disable react/prop-types */
import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(() => ({
    outliner: {
        '& label.Mui-focused': {
            color: '#FE7400',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#FE7400',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#808080',
            },
            '&:hover fieldset': {
                borderColor: '#FE7400',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#FE7400',
            },
        },
    },
}));

function EmailInput(props) {
    const classes = useStyles();

    const { inputRef, changed } = props;

    return (
        <TextField
            inputRef={inputRef}
            label="UserName"
            id="outlined-size-username"
            variant="outlined"
            className={classes.outliner}
            onChange={changed}
            fullWidth
        />
    );
}

export default EmailInput;
