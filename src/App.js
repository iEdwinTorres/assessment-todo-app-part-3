import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import TodoList from "./TodoList";
import { Route, NavLink } from "react-router-dom";

class App extends Component {
	state = {
		todos: todosList
	};

	handleToggleComplete = (todoIdToToggle) => (event) => {
		const newTodos = this.state.todos.slice();
		const newnewTodos = newTodos.map((todo) => {
			if (todo.id === todoIdToToggle) {
				return {
					...todo,
					completed: !todo.completed
				};
			}
			return todo;
		});
		this.setState({
			todos: newnewTodos
		});
	};

	handleAddTodo = (event) => {
		if (event.key === "Enter") {
			const newTodo = {
				userId: 1,
				id: Math.floor(Math.random() * 1000000),
				title: event.target.value,
				completed: false
			};
			const newTodos = this.state.todos.slice();
			newTodos.push(newTodo);
			this.setState({
				todos: newTodos
			});
			event.target.value = "";
		}
	};

	handleDelete = (id) => (event) => {
		const newTodos = this.state.todos.filter((todo) => todo.id !== id);
		this.setState({
			todos: newTodos
		});
	};

	handleClearCom = (event) => {
		const newTodos = this.state.todos.filter((todo) => todo.completed === false);
		this.setState({
			todos: newTodos
		});
	};

	render() {
		return (
			<section className="todoapp">
				<header className="header">
					<h1>todos</h1>
					<input
						className="new-todo"
						placeholder="What needs to be done?"
						onKeyDown={this.handleAddTodo}
						autoFocus
					/>
				</header>
				<Route
					exact
					path="/"
					render={() => (
						<TodoList
							todos={this.state.todos}
							handleToggleComplete={this.handleToggleComplete}
							handleDelete={this.handleDelete}
						/>
					)}
				/>
				<Route
					path="/active"
					render={() => (
						<TodoList
							todos={this.state.todos.filter((todo) => todo.completed === false)}
							handleToggleComplete={this.handleToggleComplete}
							handleDelete={this.handleDelete}
						/>
					)}
				/>
				<Route
					path="/completed"
					render={() => (
						<TodoList
							todos={this.state.todos.filter((todo) => todo.completed === true)}
							handleToggleComplete={this.handleToggleComplete}
							handleDelete={this.handleDelete}
						/>
					)}
				/>
				<footer className="footer">
					<span className="todo-count">
						<strong>{this.state.todos.filter((todo) => !todo.completed).length}</strong>{" "}
						item(s) left
					</span>
					<ul className="filters">
						<li>
							<NavLink exact to="/" activeClassName="selected">
								All
							</NavLink>
						</li>
						<li>
							<NavLink to="/active" activeClassName="selected">
								Active
							</NavLink>
						</li>
						<li>
							<NavLink to="/completed" activeClassName="selected">
								Completed
							</NavLink>
						</li>
					</ul>
					<button className="clear-completed" onClick={this.handleClearCom}>
						Clear completed
					</button>
				</footer>
			</section>
		);
	}
}

export default App;
