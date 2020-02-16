import React from 'react'
import Card from '@material-ui/core/Card';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';


class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
        }
        this.todoInput = React.createRef();
        this.addItemToList = this.addItemToList.bind(this);
    }

    addItemToList() {
        var todoText = this.todoInput.current.value;
        this.setState(
            {items: this.state.items.concat({ description: todoText })}
        );
        this.todoInput.current.value = '';
    }

    render() {
        const listItems = this.state.items.map((item) =>
            <Card className="todo-item">
                <div>{item.description}</div>
            </Card>
        );

        return (
            <div id="todo-list">
                <Card id="todo-input" className="todo-item">
                    <TextField fullWidth inputRef={this.todoInput} />
                    <IconButton id="add-button" aria-label="add"
                        color="default" onClick={this.addItemToList.bind(this)}>
                        <AddIcon />
                    </IconButton>
                </Card>
                <Divider id="todo-list-divider" />
                {listItems}
            </div>
        );
    }
}

export default TodoList;