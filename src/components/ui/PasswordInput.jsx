import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

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
    input: {
        fontFamily: 'Arial',
        fontSize: '12px',
        fontWeight: '400',
    },
}));
function PasswordInput(props) {
    const classes = useStyles();

    const { changed } = props;

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = event => {
        event.preventDefault();
    };

    return (
        <>
            <TextField
                label="Password"
                id="outlined-password-input"
                type={values.showPassword ? 'text' : 'password'}
                variant="outlined"
                className={classes.outliner}
                onChange={changed}
                fullWidth
                InputProps={{
                    classes: { input: classes.input },
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                            >
                                {values.showPassword ? (
                                    <Visibility />
                                ) : (
                                    <VisibilityOff />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
        </>
    );
}

PasswordInput.propTypes = {
    changed: PropTypes.func.isRequired,
};

export default PasswordInput;
