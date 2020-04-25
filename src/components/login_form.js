import React from 'react';
import PropTypes from 'prop-types';

export class LoginComponent extends React.Component
{
    loginAction()
    {
        if(this.refs.userName.value.length===0 || this.refs.password.value.length===0)
        {
            alert("Enter Details");
        }
        else if(this.refs.userName.value === this.refs.password.value)
        {
            alert("Login Succesfull");
        } 
        else
        {
            alert("Login Failed");
        }
    }
    render()
    {
        return (<div>
            <h1>Login</h1>
            <h4>Enter Your credentials</h4>
             User Name : {'\u00A0'} <input ref="userName" value={this.props.username} ></input>
             <br/>
             Password : {'\u00A0'} <input type="password" ref="password" value={this.props.password} ></input>
             <br/><br/>
             <button onClick={this.loginAction.bind(this)}>LOGIN</button>
            </div>); 
    }
}
LoginComponent.propTypes= {
    username: function(props, propName, componentName) {
    if (props[propName].length <5)
    return Error('User name must be at least 5 characters long');
    }};
    LoginComponent.propTypes= {
        password: function(props, propName, componentName) {
        if (props[propName].length <3)
        return Error('Password must be at least 3 characters long');
        }};