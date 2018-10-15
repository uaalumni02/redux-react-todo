import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {
        state = {
        list: [],
    }

    
    inputChangeHandler(event) {
        const list = event.target.value;
        this.setState({ list });
        console.log(list)
      }
    
      submitFormHandler = (event) => {
        event.preventDefault();
        alert('it almost works')
        // const all_items = this.state;
        // const newItem = all_items;
        // newItem.push({all_items});
        // this.setState({list: all_items, newItem})         
      }

    render() {
        return (
            <div className='newItem'>
            <form onSubmit={this.submitFormHandler.bind(this)}>
                <input
                    type="text"
                    placeholder="search"
                    value={this.state.list} onChange={this.inputChangeHandler.bind(this)} 
                />
                <br></br>
                <input type="submit" value="Submit" />
                </form>
    
                <div>
                    <h1>Items to shop for:</h1>
                <ul>
                { this.state.list}
                </ul>    
                </div>
            </div>
        );
    }
}



export default AddItem