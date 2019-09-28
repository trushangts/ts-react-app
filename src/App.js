import React,{Component} from 'react';
import './App.css';

class App extends Component{
  
  constructor(){
    super();
    this.pageTitle = "Home";
    this.state = {
      todos : [],
      title : "React Simple Application by TS",
      counter : 1,
      currenttime :  new Date()
    }
    this.addToDo = this.addToDo.bind(this)
    this.removeToDo = this.removeToDo.bind(this)
    this.details = this.detailTodo.bind(this)    
  }

  detailTodo(index){
    let todos = this.state.todos;
    let todo = todos.find(function(todo){
      return todo.counter === index;
    });
    console.log("You are clicking on ");
    console.log(todo);
  }

  addToDo(event){
    event.preventDefault();
    
    let counter = this.state.counter;
    let name = this.refs.name.value;
    let completed = this.refs.completed.value;
    let todo ={name,completed,counter};
    let todos = this.state.todos;
    
    counter +=1;
    todos.push(todo);
    this.setState({todos:todos,counter:counter});
    this.refs.todoForm.reset();
  }

  removeToDo(index){
    let todos = this.state.todos;
    let todo = todos.find(function(todo){
      return todo.counter === index;
    });

    todos.splice(todo,1);
    this.setState({
      todos : todos
    });    
  }

  render(){
    let title = this.state.title;
    let todos = this.state.todos;
    let dtTime = this.state.currenttime.toLocaleTimeString();
    
    return (      
      <div className="App">
        <h5>{this.pageTitle}</h5>
        <p>{title}</p>
        <p>{dtTime}</p>
        <form ref="todoForm">
          <input type="text" ref="name"/>
          <input type="text" ref="completed"/>
          <button onClick={this.addToDo}>Add To Do</button>
        </form>
        
        <ul>
          {todos.map((todo=> <li key={todo.counter}>{todo.counter}  {todo.name} 
                                <button onClick={this.removeToDo.bind(null,todo.counter)}>Remove</button>
                                <button onClick={this.details.bind(null,todo.counter)}>View Details</button>
                             </li>))}
        </ul>

      </div>
    );
  }

}

export default App;
