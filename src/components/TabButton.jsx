export default function CoreConcept({ children, onSelect }) {
    
    // function handleClick() {
    //     console.log('hello world !!')
    // }

    return (
    <li>
        <button onClick={onSelect}>
            {children}
        </button>
    </li>);
}