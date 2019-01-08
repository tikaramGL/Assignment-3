import React, { Component } from 'react';
import './ToDoItem.css';

class ToDoItem extends Component {
    render() {
        return (
            <form id="todo-form-group" onSubmit={this.props.addToDoItem}>
                <input placeholder="Title..." id="todo-input" name="" value={this.props.inputvalue} onChange={(e) => this.props.updateInputValue(e)}></input>
                <button id="todo-btn" type="submit" >Add</button>
            </form>
        );
    }
}

export default ToDoItem;