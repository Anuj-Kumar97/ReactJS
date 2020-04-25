import React from 'react';
import {ProductForm} from './product_form.js';
import {ProductTable} from './product_table.js';

export class ProductApp extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={ products : [{id: 1, name: 'Chair', quantity: 10, price: 600},
        {id: 2, name: 'Bag', quantity: 47, price: 2350},
        {id: 3, name: 'Laptop', quantity: 2, price: 70000}
        ]}              
    }
    render()
    {
        return(<div><ProductForm copyProductFunc={this.copyProduct.bind(this)}/> <br/><br/><ProductTable myproduct={this.state.products} /></div>);
    }
    copyProduct(product)
    {
        this.setState({newProduct:product})
    }
}