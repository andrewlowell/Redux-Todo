import {ADD_TODO} from '../actions';

const initialState = {
  todos: ['Create more todos']
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: state.todos.concat([action.payload])
      };
    default:
      return state;
  }
}