import React, { Component } from "react";

class TodoList extends Component {
  state = {
    addTodoValue: ["", true],
    todos: [...this.props.todos.map((todo) => [todo, true])],
    showForm: false,
  };

  handleChange = (event) => {
    this.setState({ addTodoValue: [event.target.value, true] });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({
      todos: [...this.state.todos, this.state.addTodoValue],
      addTodoValue: ["", true],
      showForm: false,
    });
  };

  addTodoOnClick = (event) => {
    this.setState({ showForm: true });
  };

  toggleTodo = (i, event) => {
    let ts = this.state.todos;
    const t = [ts[i][0], !ts[i][1]];

    ts[i] = t;

    this.setState({
      todos: [...ts],
    });
  };

  removeTodos = (event) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo[1])],
    });
  };

  render() {
    return (
      <div>
        <ol className="list">
          {this.state.todos.map((todo, i) => {
            return (
              <li key={todo}>
                <div
                  className={
                    this.state.todos[i][1]
                      ? "list__item"
                      : "list__item text-strike"
                  }
                  onClick={(event) => this.toggleTodo(i, event)}
                >
                  {todo[0]}
                </div>
              </li>
            );
          })}
        </ol>
        <div id="clear">
          <button onClick={this.removeTodos}>clear</button>
        </div>
        <div>
          <button
            onClick={this.addTodoOnClick}
            className={"btn " + (this.state.showForm ? "d-hidden" : "")}
          >
            Add Todo
          </button>
        </div>
        <form
          onSubmit={this.handleSubmit}
          className={this.state.showForm ? "" : "d-hidden"}
        >
          <label value="Add todo" />
          <input
            type="text"
            value={this.state.addTodoValue[0]}
            onChange={this.handleChange}
          />
          <input type="submit" value="+" />
        </form>
      </div>
    );
  }
}

export default TodoList;
