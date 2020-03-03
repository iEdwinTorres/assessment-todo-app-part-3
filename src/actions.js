export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";

export const addTodo = (todoTitle) => {
	const newTodo = {
		userId: 1,
		id: Math.floor(Math.random() * 1000000),
		title: todoTitle,
		completed: false
	};
	return {
		type: ADD_TODO,
		payload: newTodo
	};
};
export const toggleTodo = (todoIdToToggle) => {
	return {
      type: TOGGLE_TODO,
      payload: todoIdToToggle
	};
};
export const deleteTodo = (deleteId) => {
	return {
		type: DELETE_TODO,
		payload: deleteId
	};
};
export const clearCompleted = () => {
	return {
		type: CLEAR_COMPLETED
	};
};
