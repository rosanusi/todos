import React, { Component } from "react";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import uuid from "uuid";
import $ from "jquery";

// import SnippetList from "./SnippetList"

class Todo extends Component {

    constructor(props){
        super(props);

        this.state = {
            storedlist: [],
            todos: []
        }
    }


    getTodos(){
        $.ajax({
            url: 'https://jsonplaceholder.typicode.com/todos',
            datataType: 'json',
            cache: false,
            success: function(data){
                this.setState({todos: data}, function(){
                    console.log(this.state);
                });
            }.bind(this),
            error: function(xhr, status, err){
                console.log(err);
            }
        });
    }

    getStoredlist(){
        this.setState({
            storedlist: [
                {
                    id: uuid.v4(),
                    title: "this is the first to-do list",
                    category: "js",
                    done: false
                },
                {
                    id: uuid.v4(),
                    title: "this is the second to-do list",
                    category: "html5",
                    done: false
                },
                {
                    id: uuid.v4(),
                    title: "this is the third to-do list",
                    category: "scss",
                    done: false
                },
                {
                    id: uuid.v4(),
                    title: "this is the fourth to-do list",
                    category: "css",
                    done: false
                },
                {
                    id: uuid.v4(),
                    title: "this is the fifth to-do list",
                    category: "js",
                    done: false
                },
                {
                    id: uuid.v4(),
                    title: "this is the sixth to-do list",
                    category: "react",
                    done: false
                }
            ]
        });
    }


    componentWillMount() {
        this.getStoredlist();
        this.getTodos();
    }

    componenteDidMount(){
        this.getTodos();
    }

    handleAddTask(task) {
        // console.log(project);
        let storedlist = this.state.storedlist;
        storedlist.push(task);
        this.setState({storedlist:storedlist});
    }

    handleDeleteTask(id) {
        let storedlist = this.state.storedlist;
        let index = storedlist.findIndex(x => x.id === id);
        storedlist.splice(index, 1);
        this.setState({storedlist:storedlist});
    }

    
    render() {
        return(
            <div className="todo">
                <AddTodo addTask = {this.handleAddTask.bind(this)} />
                <TodoList 
                    storedlist = {this.state.storedlist} 
                    todos = {this.state.todos} 
                    onDelete={this.handleDeleteTask.bind(this)}
                    />
            </div>
        );
    } 

}


export default Todo;