import React, { Component } from "react";

class TodoItem extends Component {

    deleteTask(id){
        // console.log('test');
        this.props.onDelete(id);
    }
 
    render() {

        return (
            <li className="task">
                <strong>{this.props.task.title}</strong> <button type="button" onClick={this.deleteTask.bind(this, this.props.task.id)}>delete</button>
            </li>
        );
    }
}


export default TodoItem;