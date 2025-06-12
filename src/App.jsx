import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");

  useEffect(() => {
  	document.title = name;
  });
  const checkName = () => {
	  setName(document.getElementById("nameInput").value);
	  let URL = 'https://api.agify.io?name=' + name;
	  axios({
		  method:'get',
		  url: URL
	  });
  }
  return (
    <>
	  <input id="nameInput" className="nameInput" type="text"/>
	  <button onClick={checkName}>Comprobar nombre</button>
	  <p>{name}</p>
	  <p></p>
	  <p></p>
	  <p></p>
    </>
  );
}

export default App
