import {ADD_TODO, TOGGLE_COMPLETED} from '../actions';

const initialState = {
  todos: [{
    value: 'Create more todos',
    completed: false
  }]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: state.todos.concat([action.payload])
      };
    case TOGGLE_COMPLETED:
      return {
        todos: state.todos.map(t => {
          if (t.value === action.payload) {
            return {
              value: t.value,
              completed: !t.completed
            };
          }
          else {
            return t;
          }
        })
      }
    default:
      return state;
  }
}