/* eslint-disable react/prop-types */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import EmailInputFun from '../ui/EmailInput';
import PasswordInput from '../ui/PasswordInput';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    pos: {
        marginBottom: 12,
    },
    hidden: {
        display: 'none',
    },
    shown: {
        display: 'inline',
    },
});

function Auth(props) {
    const classes = useStyles();
    const { emailInputRef, onEmailChanged, onPasswordChanged } = props;

    return (
        <div>
            <EmailInputFun inputRef={emailInputRef} changed={onEmailChanged} />
            <div className={classes.pos} />
            {/* <PasswordInput changed={onPasswordChanged} /> */}
        </div>
    );
}

export default Auth;
