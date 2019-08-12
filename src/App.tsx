import React from 'react';
import './App.scss';

interface TodoProps {
    id: number,
    title: string,
    content: string,
    done: boolean
}

class Todo extends React.Component {
    constructor(props: TodoProps) {
        super(props);
    }
}

const App: React.FC = () => {
  return (
    <div className="App">
        <h1>Hello React!</h1>
    </div>
  );
};

export default App;
