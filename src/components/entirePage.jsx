import React, { Component } from 'react';
import Board from './board';
import Menu from './menu';

class EntirePage extends Component {
    state = {  }
    render() { 
        return (  
            <React.Fragment>


            <Board>
            </Board>

            <Menu>
            </Menu>


            </React.Fragment>

        );
    }
}
 
export default EntirePage;