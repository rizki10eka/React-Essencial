import './Todo.css';

export default function Todo(props) {
    return <li className="todo" >{props.text}</li>;
}