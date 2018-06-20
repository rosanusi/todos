import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoList extends Component {

    deleteTask(id){
        this.props.onDelete(id);
    }
    
    render() {
        let TodoItems;
        if(this.props.todos ){
            TodoItems = this.props.todos.map(task => {
                return (
                    <TodoItem  onDelete={this.deleteTask.bind(this)} key={task.id} task={task} />
                );
            });
        }

        return (
            <div className="Tasks">
                {TodoItems}
            </div>
        );
    }
}

export default TodoList;
