import React, { Component } from 'react';
import './ToDoList.css';

class ToDoList extends Component {
    markAsComplete = (key) => {
        console.log("Here")
    }

    render() {

        this.items = this.props.todoItems.map((item, key) =>
            <li key={key}>
                <input className="todoCheck" type="checkbox" onChange={this.markAsComplete(key)}></input>
                <label className="strikethrough">{item}</label>
                <button className="todoCancel" onClick={(e) => this.props.deleteToDO(e,item)}>X</button>
            </li>
        );

        return (
            <ul id="todoitemslist">
                {this.items}
            </ul>
        )
    }
}

export default ToDoList; 