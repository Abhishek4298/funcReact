import ToDoItem from './ToDoItem';

const Todos = ({ todos, onDelete }) => {
	return (<div className="container">
		<h1 className="text-center"> Todo's List </h1>
		{todos.map((todo) => {
			return <ToDoItem todo={todo} key={todo.sno} onDelete={onDelete}/>
		})}
	</div>);
}

export default Todos;