const initialState = {
    todos: ["Eat", "Drink"],
}

const reducer = (state = initialState, action) => {
    if(action.type === 'ADD_ITEM') {
        const { task } = action;
        return {
            todos: [...state.todos, task]
        }
    }
    return state;

}


export default reducer