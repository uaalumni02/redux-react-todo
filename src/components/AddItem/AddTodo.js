import React from 'react';

const AddTodo = props => {
    return (
        <div>
            <input
                type="text"
                placeholder="new task"
                value={props.inputValue}
                onChange={props.handleChange} 
            />
            <br></br>
            <button onClick={props.submitHandler}> Add Todo </button>
        </div>
    );
}

export default AddTodo;
