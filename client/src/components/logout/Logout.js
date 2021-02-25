import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Button } from 'react-bootstrap';
import { withRouter, useHistory } from 'react-router-dom';
import './logout.style.css'

const Logout = () => {
    let history = useHistory();

    const logout = () => {
        axios.get('/logout')
            .then(() => {
                Cookies.remove("auth_token");
                history.push('/logout');
            });
    }

    return (
        <>
            <Button className="logoutButton" onClick={() => logout()}>
                <i className="bi bi-power"></i>
            </Button>
        </>
    );
}

export default withRouter(Logout);