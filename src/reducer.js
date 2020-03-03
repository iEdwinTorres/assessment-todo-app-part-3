import todoList from "./todos.json";
import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_COMPLETED } from "./actions.js";

const initialState = {
	todos: todoList
};
const todoReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TODO: {
			const newTodos = state.todos.slice();
			newTodos.push(action.payload);
			return {
				todos: newTodos
			};
		}
		case TOGGLE_TODO: {
			const newTodos = state.todos.slice();
			const newnewTodos = newTodos.map((todo) => {
				if (todo.id === action.payload) {
					return {
						...todo,
						completed: !todo.completed
					};
				}
				return todo;
			});
			return {
				todos: newnewTodos
			};
		}
		case DELETE_TODO: {
			const newTodos = state.todos.filter((todo) => {
				if (todo.id === action.payload) {
					return false;
				}
				return true;
			});
			return {
				todos: newTodos
			};
		}

		case CLEAR_COMPLETED: {
			const newTodos = state.todos.filter((todo) => todo.completed === false);
			return {
				todos: newTodos
			};
		}
		default:
			return state;
	}
};

export default todoReducer;
