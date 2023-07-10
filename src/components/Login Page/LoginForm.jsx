import React from 'react'
import './LoginForm.css'

const LoginForm = () => {
    return (
        <div className="m-l">
            <img src='../../../assests/login/companyLogo.png' alt='lmt-d' className='logo'/>
            <div className='m-l-f'>
                <h1>LOGIN FORM</h1>
                <div className='form-inputs'>
                    <h2><label for="userid">User ID:</label></h2>
                    <div><input id='userid' type="text" placeholder='UserId' /></div>
                </div>
                <div className='form-inputs'>
                    <h2><label for="password">Password:</label></h2>
                    <div><input id='password' type="text" placeholder='Password' /></div>
                </div>
                <div className='radio-btn'>
                    <label for="employee">Employee</label><input type="radio" name="user_type" id="employee" />
                    <label for="admin">Admin</label><input type="radio" name="user_type" id="admin" />
                </div>
                <div className='m-l-b'>
                    LogIN
                </div>
            </div>
        </div>
    )
}

export default LoginForm
