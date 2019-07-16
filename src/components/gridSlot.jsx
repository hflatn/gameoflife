import React, { Component } from 'react';

class gridSlot extends Component {
    state = { 
        activeIndex: []
    }

    constructor(props){
        super(props)
        this.createSlot = this.createSlot.bind(this);
        this.changeColor = this.changeColor.bind(this)
    }

    createSlot(){
        var slotArr = [];
        
        for(var i = 0; i < 1600; i++){
            slotArr.push(<div id = {i}  className = {this.state.activeIndex.includes(i) ? "slot_black" : "slot_white"} onClick={this.changeColor}> </div>)
            this.state.activeIndex.includes(i, "Is it checking")
        }
        return slotArr;
    }
    
    changeColor(id){
        let currentArr = this.state.activeIndex;
        let currentId = parseInt(id.target.id);
        let index = currentArr.indexOf(currentId);

        if(!(currentArr.includes(currentId))){
            this.setState({ activeIndex:[...this.state.activeIndex, currentId] })
        }

        if(currentArr.includes(currentId)){
            currentArr.splice(index, 1);
            this.setState({activeIndex: currentArr})
        }

  
        console.log(id.target.id, "whats id")
        console.log(this.state.activeIndex);
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