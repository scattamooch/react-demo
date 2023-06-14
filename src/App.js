import {useState} from "react";

function App() {
	const [number, setNumber] = useState(0);

	const increment = (e) => {
		//our event object (e) came UP form the child component
		setNumber(number + 1);
	}

	return (
		<div>
			<h1>{number}</h1>
			<Child incrementFunction ={increment}/>
			<TheForm />
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

//overall takeaway: pass a function DOWN to other information UP




const TheForm = () => {

	const [username, setUsername] = useState("")
	const [bio, setBio] = useState("")

	const handleUsername = e => {
		setUsername(e.target.value);
	}

	const handleBio = e => {
		setBio(e.target.value);
	}

	const handleSubmit = e => {
		e.preventDefault();
		console.log("so what is in state, anyways?: ")
		console.log(username, bio)
	}
		

	return (
		<div>
		<form onSubmit={handleSubmit}>
			username:<input onChange={handleUsername} name="username"/>
			bio:<input onChange={handleBio} />
			<input type="submit" />
		</form>
		</div>
	)
}