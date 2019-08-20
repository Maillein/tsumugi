import React, {Component} from 'react';

interface Todo {
    title: string,
    contents: string
}

interface AppProps {
    todo: Todo[],
    newTodo: Todo
}

class App extends Component<{}, AppProps> {
    constructor(props: any) {
        super(props);
        this.state = {
            todo: [],
            newTodo: {title: "", contents: ""}
        };
    }

    onTitleChange = (event: any) => {
        let newTodo = this.state.newTodo;
        newTodo.title = event.target.value;
        this.setState({
            newTodo: newTodo
        });
    };

    onContentsChange = (event: any) => {
        let newTodo = this.state.newTodo;
        newTodo.contents = event.target.value;
        this.setState({
            newTodo: newTodo
        });
    };

    addTodo = () => {
        const todo = this.state.todo;
        const newTodo = Object.assign({}, this.state.newTodo);
        this.setState({
            todo: [...todo, newTodo]
        })
    };

    removeTodo = (index: any) => {
        const {todo} = this.state;
        this.setState({
            todo: [...todo.slice(0, index), ...todo.slice(index + 1)]
        });
    };

    render() {
        const {todo} = this.state;

        return (
            <div>
                <div>
                    <label>
                        Title : <input type={"text"} value={this.state.newTodo.title} onChange={this.onTitleChange}/>
                    </label>
                    <br/>
                    <label>
                        Contents : <input type={"text"} value={this.state.newTodo.contents} onChange={this.onContentsChange}/>
                    </label>
                    <button onClick={this.addTodo}>Add</button>
                </div>
                <ul>
                    {todo.map((todo, index) =>
                        <li key={index}>
                            <h1>
                                {todo.title}
                            </h1>
                            {todo.contents}
                            <button onClick={() => {this.removeTodo(index)}}>Remove</button>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default App;
