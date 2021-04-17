import ToDoItem from './ToDoItem';


const Todos = ({ todos }) => {
	return (<div className="container">
		<h1 className="text-center"> Todo's List </h1>
		{		todos.map((todo) => {
			return <ToDoItem todo={todo} />
		})}

		<button type="button" class="btn btn-danger btn-sm">Delete</button>

	</div>);
}

export default Todos;