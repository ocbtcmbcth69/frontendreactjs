import React, { useState } from 'react'
import ForgotPassword from '../../components/validate/ForgotPassword'
import Login from '../../components/validate/Login'
import Register from '../../components/validate/Register'

import '../../styles/Auth.scss'

export default function (props) {
    let [authMode, setAuthMode] = useState("login")

    const changeAuthMode = () => {
        setAuthMode(authMode === "login" ? "signup" : "login")
    }

    const forgotPassword = () => {
        setAuthMode("forgotpw")
    }

    const login = () => {
        setAuthMode("login")
    }

    const changeAuth = (newAuthMode) => {
        setAuthMode(newAuthMode)
    }

    if (authMode === "login") {
        return (
            <Login changeAuth={changeAuth} />
        );
    }
    if (authMode === "signup") {
        return (
            <Register changeAuth={changeAuth}/>
        );
    }

    if (authMode === "forgotpw") {
        return (
            <ForgotPassword changeAuth={changeAuth} />
        );
    }
}
