import React from 'react';

const Todos = props => {
    const todos = props.todos.length ?
        <div> 
            <ul> 
                { props.todos.map((todo, index) => 
                    <li key={index}> <strong> { todo } </strong> </li>
                )} 
            </ul>
        </div> : <p> No todos </p>;
    return (
        <div>
            { todos }
        </div>
    );
}

export default Todos;
