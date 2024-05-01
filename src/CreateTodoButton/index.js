import './CreateTodoButton.css';

function CreateTodoButton() {
    return (
        <button className="CreateTodoButton"
        onClick={
            (eventico) => {
                console.log('si funciona')
                console.log(eventico)
                console.log(eventico.target)
            }
        }
        >+</button>
    );
}

export { CreateTodoButton };