import {useState} from "react";

function App() {
	const [number, setNumber] = useState(0);

	const increment = (e) => {
		//our event object (e) came UP form the child component
		setNumber(number + 1);
		console.log(e);
	}

	return (
		<div>
			<h1>{number}</h1>
			<Child incrementFunction ={increment}/>
		</div>
	);
}

export default App;


const Child = (props) => {

	return (
		<div>
			{/* props.incFunc passes e upstream to be in scope where the function was originally defined */}
		<button onClick={ (e) => props.incrementFunction(e)}>change number</button>
		</div>
	)
}

//overall takeaway: pass a function DOWN to bring something else UP
