import React, { Component } from 'react';

class gridSlot extends Component {
    state = {  }

    constructor(props){
        super(props)
        this.createSlot = this.createSlot.bind(this);
    }

    createSlot(){
        var slotArr = [];
        for(var i = 0; i < 1600; i++){
            slotArr.push(<div id = {i} className = "slot"> </div>)
        }
        return slotArr;
    }

    render() { 
        return ( 
            <React.Fragment>
                

           { this.createSlot() }
 

            </React.Fragment>

         );
    }
}
 
export default gridSlot;