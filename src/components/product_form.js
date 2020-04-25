import React from 'react';
import PropTypes from 'prop-types';

export class ProductForm extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (<div>
            <center> <h1>Product Application</h1>
            </center>

            <br/>
            Name:{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                <input ref="name" type="text" value={this.props.name}></input>
            <br/><br/>
            Quantity: {'\u00A0'}
            <input ref="quantity" type="text"></input>
            <br/><br/>
            Price:{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
            <input ref="price" type="text"></input>
            <br/><br/>
            <button onClick={this.onAddProductAction.bind(this)}>ADD PRODUCT</button>
            </div>); 
    }
    onAddProductAction()
    {
        let newproduct ={
             name  :this.refs.name.value,
             quatity:this.refs.quantity.value,
             price:this.refs.price.value    
         }
         this.props.copyProductFunc(this.newproduct);
    }
}
ProductForm.propTypes= {
    name: function(props, propName, componentName) {
    if (props[propName].length <3)
    return Error('Name must be at least 3 characters long');
}};
ProductForm.propTypes= {
 quantity: function(props, propName, componentName) {
    if (props[propName].type!=Number)
    return Error('quantity should be a number');
}};
ProductForm.propTypes= {
    price: function(props, propName, componentName) {
    if (props[propName].type!=Number)
        return Error('Price should be a number');
}};  