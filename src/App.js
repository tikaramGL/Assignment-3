import React, { Component } from 'react';
import './App.css';
import ToDoItem from './components/ToDoItem.js';
import ToDoList from './components/ToDoList.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputvalue: '',
      todoItems: []
    }

    this.addToDoItem = this.addToDoItem.bind(this);

    this.updateInputValue = this.updateInputValue.bind(this);

    this.deleteToDO = this.deleteToDO.bind(this);
  }

  addToDoItem = e => {
    e.preventDefault()
    const newToDo = this.state.inputvalue;
    if (newToDo !== '') {
      console.log(newToDo)
      const todoItems = [...this.state.todoItems, newToDo]
      this.setState({
        todoItems: todoItems,
        inputvalue: '',
      })
    } else {
      alert("Please enter the title!")
    }
  }

  updateInputValue(e) {
    this.setState({
      inputvalue: e.target.value
    });
  }

  deleteToDO = (e, item) => {
    e.preventDefault();
    const filteredItems = this.state.todoItems.filter(curtitem => {
      return curtitem !== item
    })
    this.setState({
      todoItems: filteredItems,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          My To Do List
          <ToDoItem inputvalue={this.state.inputvalue} addToDoItem={this.addToDoItem} updateInputValue={this.updateInputValue} />
        </header>
        <ToDoList todoItems={this.state.todoItems} deleteToDO={this.deleteToDO}/>
      </div>
    );
  }
}

export default App;
