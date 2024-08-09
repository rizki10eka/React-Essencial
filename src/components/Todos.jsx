import Todo from './Todo.jsx';


export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

export default function Todos() {
    return (<section id="todo">
        <div><ul className='todo'>

            {DUMMY_TODOS.map((item) => (
                <Todo key={item} text={item} />
            ))}

        </ul></div>
    </section>);
}