import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [name, setName] = useState("");
  let age;

  useEffect(() => {
  	document.title = name;
  });
  const checkName = () => {
	  setName(document.getElementById("nameInput").value);
	  let URL = `https://api.agify.io?name=${name}`;
	  axios({
		  method:'get',
		  url: URL,
	          responseType: 'application/json, harset=utf-8'
	  })
		  .then(function (response){
			age = response.data.name;
		  });
  }
  return (
    <>
	  <input id="nameInput" className="nameInput" type="text"/>
	  <button onClick={checkName}>Comprobar nombre</button>
	  <p>{name}</p>
	  <p>{age}</p>
	  <p>{}</p>
	  <p>{}</p>
    </>
  );
}

export default App
