const ToDoItem = ({ todo }) => {
	return (<>
		<h4>{todo.title}</h4>
		<p>{todo.desc}</p>
	</>);
}
export default ToDoItem;
