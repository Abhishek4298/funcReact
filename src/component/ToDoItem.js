const ToDoItem = ({ todo, onDelete }) => {
	return (<>
		<h4>{todo.title}</h4>
		<h4>{todo.desc}</h4>
		<button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button> 
	</>);
}
export default ToDoItem;
