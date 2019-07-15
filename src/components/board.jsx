import React, { Component } from 'react';
import GridSlot from './gridSlot';
import './board.css';
import './gridSlot.css';


class board extends Component {
    state = {  }

    
    render() { 
        return (
             <React.Fragment>

            
                <div className = "outline">
                   <GridSlot>

                   </GridSlot>

                </div>

                


        </React.Fragment> 
        );
    }
}
 
export default board;