import React from 'react';
import './App.scss';

interface TodoProps {
    id: number,
    title: string,
    content: string,
}

class Todo extends React.Component<TodoProps, TodoProps> {
    constructor(props: TodoProps) {
        super(props);
        this.state = props;
    }
    render(): React.ReactElement {
        return (
            <div className={"Todo"}>
                <h1>{this.state.title}</h1>
                <p>{this.state.content}</p>
                <button>done</button>
            </div>
        );
    }
}

interface TodoListState {
    title: string,
    content: string,
    done: boolean
}

class TodoList extends React.Component<{},Map<number, TodoListState>> {
    constructor(props: any) {
        super(props);
        this.state = new Map<number, TodoListState>();
        this.state.set(1, {title: "react", content: "reactでtodoリストを作る", done: false});
        this.state.set(2, {title: "飯", content: "飯を食う", done: false});
    }

    handleClick = () => {
        this.setState(
            {}
        )
    };

    render(): React.ReactElement {
        let listItems:React.ReactElement[] = [];
        this.state.forEach(
            (value: TodoListState, key: number) => {
                if (!value.done) {
                    listItems.push(<li key={key}><Todo id={key} title={value.title} content={value.content}/></li>);
                }
            }
        );
        return (
            <ul>{listItems}</ul>
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
