import React, { Component } from "react";
import "./index.css";
import todosList from "./todos.json";
import TodoList from "./TodoList";
import { Route, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addTodo, clearCompleted } from "./actions";

class App extends Component {
	state = {
		todos: todosList
	};

	handleAddTodo = (event) => {
		if (event.key === "Enter") {
			this.props.addTodo(event.target.value);
			event.target.value = "";
		}
	};

	handleClearCompleted = (event) => {
		this.props.clearCompleted();
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
				<Route exact path="/">
					<TodoList todos={this.props.todos} />
				</Route>
				<Route exact path="/active">
					<TodoList todos={this.props.todos.filter((todo) => todo.completed === false)} />
				</Route>
				<Route exact path="/completed">
					<TodoList todos={this.props.todos.filter((todo) => todo.completed === true)} />
				</Route>
				<footer className="footer">
					{/* <span className="todo-count">
						<strong>{this.state.todos.filter((todo) => !todo.completed).length}</strong>{" "}
						item(s) left
					</span> */}
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
					<button className="clear-completed" onClick={this.handleClearCompleted}>
						Clear completed
					</button>
				</footer>
			</section>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		todos: state.todos
	};
};

const mapDispatchToProps = {
	addTodo,
	clearCompleted
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
