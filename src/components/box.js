import React from 'react';

export class AlertComponent extends React.Component{
    showOKAlertBox()
    {
        alert('OK Clicked');
    }
    showCancelAlertBox()
    {
        alert('Cancel Clicked');
    }
    render(){
        return <div>
            <h2><button onClick={this.showOKAlertBox.bind(this)}>OK</button></h2>
            <h2><button onClick={this.showCancelAlertBox.bind(this)}>Cancel</button></h2>
            </div>
    }
}