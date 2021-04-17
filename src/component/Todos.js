import ToDoItem from './ToDoItem';

const Todos = ({ todos, onDelete }) => {
	return (<div className="container">
		<h1 className="text-center"> Todo's List </h1>

		{todos.length ? todos.map((todo) => {
			return <ToDoItem todo={todo} key={todo.sno} onDelete={onDelete} />
		}) : <h2>No todos to display </h2>}
	</div>);
}

export default Todos;