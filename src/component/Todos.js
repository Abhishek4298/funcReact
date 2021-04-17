import ToDoItem from './ToDoItem';


const Todos = ({todos}) => {
	return ( <>
	<h3> Todo's List </h3>
	<ToDoItem todo={todos[0]}/>	
	</> );
}
 
export default Todos;