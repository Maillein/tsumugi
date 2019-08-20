import React from 'react';

interface TodoProps {
    title: string,
    content: string,
    onClick: (title: string) => void
}

const Todo: React.FC<TodoProps> = (props: TodoProps) => {
    return (
        <div className={"Todo"}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={() => {props.onClick(props.title);}}>done</button>
        </div>
    )
};

interface NewTodoProps {
    onClick: (newTodo: TodoListState) => void
}

class NewTodo extends React.Component<NewTodoProps, TodoListState> {
    state: TodoListState;

    constructor(props: NewTodoProps) {
        super(props);
        this.state = {title: "", content: "", done: false};
    }

    handleChangeTitle = (event: any) => {
        this.setState({title: event.target.value});
    };

    handleChangeContent = (event: any) => {
        this.setState({content: event.target.value});
    };

    render(): React.ReactElement {
        return (
            <form>
                <label>
                    Title:
                    <input type={"text"} value={this.state.title} onChange={this.handleChangeTitle}/>
                </label>
                <br/>
                <label>
                    Contents:
                    <input type={"text"} value={this.state.content} onChange={this.handleChangeContent}/>
                </label>
                <br/>
                <button onClick={() => {this.props.onClick(this.state);}}>done</button>
            </form>
        )
    }
}

interface TodoListState {
    title: string,
    content: string,
    done: boolean
}

class TodoList extends React.Component<{},Map<string, TodoListState>> {
    constructor(props: any) {
        super(props);
        this.state = new Map<string, TodoListState>();
        this.state.set("react", {title: "react", content: "reactでtodoリストを作る", done: false});
        this.state.set("飯", {title: "飯", content: "飯を食う", done: false});
    }

    // "add"ボタンが押された時
    addClick = (newTodo: TodoListState) => {
        this.state.set(newTodo.title, {title: newTodo.title, content: newTodo.content, done: false});
        // this.setState(
        //     (state) => {
        //         state.set(newTodo.title, {title: newTodo.title, content: newTodo.content, done: false});
        //     }
        // );
    };

    // "done"ボタンが押された時
    doneClick = (title: string) => {
        this.setState(
            (prevState) => {
                prevState.get(title)!.done = true;
            }
        );
        this.forceUpdate();
    };

    render(): React.ReactElement {
        let listItems:React.ReactElement[] = [];
        this.state.forEach(
            (value: TodoListState, key: string) => {
                if (!value.done) {
                    listItems.push(
                        <li key={key}>
                            <Todo title={value.title} content={value.content} onClick={this.doneClick}/>
                        </li>
                    );
                }
            }
        );
        return (
            <div className={"TodoList"}>
                <NewTodo onClick={this.addClick}/>
                <ul>{listItems}</ul>
            </div>
        )
    }
}

const App: React.FC = () => {
    return (
        <div>
            <TodoList/>
        </div>
    );
};

export default App;
