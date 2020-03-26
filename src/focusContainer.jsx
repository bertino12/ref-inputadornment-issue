import React, { useEffect, useRef } from 'react';
import Auth from './components/Auth/Auth';

function Focuser(props) {
    const emailInputRef = useRef();

    useEffect(() => {
        console.log(`ref value${emailInputRef.current}`);
        if (emailInputRef) {
            emailInputRef.current.focus();
        }
    }, [emailInputRef]);

    function emailChangedHandler() {
        console.log('email changed...');
    }

    function passwordChangedHandler() {
        console.log('password changed...');
    }

    return (
        <div>
            <Auth
                emailInputRef={emailInputRef}
                onEmailChanged={emailChangedHandler}
                onPasswordChanged={passwordChangedHandler}
            />
        </div>
    );
}

export default Focuser;
