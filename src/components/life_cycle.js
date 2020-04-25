import React from 'react';

export class LifeComponent extends React.Component{
    constructor(props){
        super(props);
        console.log("Constructor called");
    }
    componentWillMount(){
        console.log("componentWillMount()");
    }
    render(){
        console.log("render()");
        return<h1>HELLO WORLD</h1>
    }
    componentDidMount(){
        console.log("componentDidMount()");
    }
    componentWillReceiveProps(nextProps){
        console.log("componentWillReceiveProps()",nextProps);
    }
    shouldComponentUpdate(){
        console.log(" shouldComponentUpdate()");
            return true;
    }
    componentWillUpdate(){
        console.log("componentwillUpdate()");
    }
    
    componentDidUpdate(){
        console.log("componentDidUpdate()");
    }
    componentWillUnmount(){
        console.log("componentWillUnmount()");
    }

}