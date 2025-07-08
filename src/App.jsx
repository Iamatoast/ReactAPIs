import { useState, useEffect } from 'react';
import axios from 'axios';
import { getName } from 'country-list';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [nation, setNation] = useState("");

  useEffect(() => {
  	document.title = name;
  });
  const checkName = () => {
	  let tempName = document.getElementById("nameInput").value;
	  setName(tempName);
	  axios({
		  method:'get',
		  url: `https://api.agify.io?name=${tempName}`,
	          responseType: 'application/json, harset=utf-8'
	  })
		  .then(res =>{
			setAge(JSON.parse(res.data).age);
		  });
	  axios({
		  method:'get',
		  url: `https://api.genderize.io?name=${tempName}`,
	          responseType: 'application/json, harset=utf-8'
	  })
		  .then(res =>{
			setGender(JSON.parse(res.data).gender);
		  });
	  axios({
		  method:'get',
		  url: `https://api.nationalize.io/?name=${tempName}`,
	          responseType: 'application/json, harset=utf-8'
	  })
		  .then(res =>{
			setNation(JSON.parse(res.data).country[0].country_id);
		  });
  }
  return (
    <>
	  <input id="nameInput" className="nameInput" type="text"/>
	  <button onClick={checkName}>Test Name</button>
	  <p>Name: {name}</p>
	  <p>Age: {age}</p>
	  <p>Gender: {gender}</p>
	  <p>Nationality: {getName(nation)}</p>
    </>
  );
}

export default App
