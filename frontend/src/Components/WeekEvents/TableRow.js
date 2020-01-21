import React, { Component } from 'react';
import moment from 'moment';

class TableRow extends Component {
    constructor(props) {
        super(props);
     }
    
    render() {
    return (
    
        <tr>
          <td>
            {this.props.obj.event_name} 
          </td>
          <td>{ moment(this.props.obj.startDate).format("MMMM D, Y") }</td>
          <td>
            <button onClick={this.delete} className="btn btn- 
          danger">Delete</button>
          </td>
         </tr>
         );
         }
          }
       export default TableRow;