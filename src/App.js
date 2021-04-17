import './App.css';
// import UseStateLearn from "./component/UseStateLearn";
// import Form from "./component/Form";
// import UseEffectLearn from "./component/UseEffectLearn";
import Header from './component/Header';
import Footer from './component/Footer';
import Todos from './component/Todos';


function App() {
	let todos = [
		{
			sno: "1",
			title: "Hello title 1",
			desc: "complete React"
		},
		{
			sno: "2",
			title: "Hello title 2",
			desc: "complete AWS"
		},
		{
			sno: "3",
			title: "Hello title 3",
			desc: "complete Mern"
		}
	]

	const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
	}
	return (
		<>
			{/* <UseStateLearn name="Data"/> */}
			{/* <Form /> */}
			{/* <UseEffectLearn /> */}
			<Header title="Todo's List" searchBar={true} />
			<Todos todos={todos} onDelete={onDelete} />
			<Footer />
		</>
	);
}

export default App;
