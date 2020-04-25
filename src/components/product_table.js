import React from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

export class ProductTable extends React.Component
{
    constructor(props)
    {
        super(props)
        
    }
    render()
    {
        return (<div>
            <style>{`
    table,th {
     border:1px solid black;
    }
    td{
        border:0.5px solid black;
    }
  `}</style>
            <table cellPadding="7px" cellSpacing="0px"  >
            <thead>
<tr >
<th>Id</th>
<th>  Name  </th>
<th>Quantity</th>
<th>Price</th>
<th>Action</th> 
</tr>

</thead>
 
<tbody >
 { 
this.props.myproduct.map((product, index) => {
         const { name, quantity, price } = product  ;
         let id=0;
         return (
            <tr key={id}>
               <td>{++id}</td>
               <td>{name}</td>
               <td>{quantity}</td>
               <td>{price}</td>
               <td><button><EditIcon fontSize='inherit'></EditIcon>{'\u00A0'}Edit</button>{'\u00A0'}{'\u00A0'}<button><DeleteIcon fontSize='inherit'></DeleteIcon>{'\u00A0'}Delete</button></td>
            </tr>
         )
      })
    }
    
</tbody>
            </table>
        </div>); 
    }
}