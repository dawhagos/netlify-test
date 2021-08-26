import "./App.css";
import { useState } from "react";
import Axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);

  const addEmployee = () => {
    Axios.post("https://worldwide-hr-system.herokuapp.com/create", {
      name: name,
      age: age,
      country: country,
      position: position,
      wage: wage,
    }).then(() => {
      console.log("success");
    });
  };

  const getEmployees = () => {
    Axios.get("https://worldwide-hr-system.herokuapp.com/employees").then(
      (response) => {
        setEmployeeList(response.data);
      }
    );
  };

  const handleSubmit = (e) => {
    setName({
      name: "",
    });
    setAge({
      age: "",
    });
    setCountry({
      country: "",
    });
    setPosition({
      position: "",
    });
    setWage({
      wage: "",
    });
  };

  return (
    <div className="App">
      <div onSubmit={handleSubmit} className="information">
        <h2>HR: Employees Menu</h2>
        <label>Name:</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age:</label>
        <input
          type="number"
          onChange={(event) => {
            setAge(event.target.value);
          }}
        />
        <label>Country:</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position:</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage (year):</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(event.target.value);
          }}
        />
        <button onClick={addEmployee} type="submit">
          Add Employee
        </button>
        <div className="employees">
          <button onClick={getEmployees}>Show Employees</button>
          {employeeList.map((val, key) => {
            return (
              <div className="employee">
                <h3>Name: {val.name}</h3>
                <h3>Age: {val.age}</h3>
                <h3>Country: {val.country}</h3>
                <h3>Position: {val.position}</h3>
                <h3>Wage: {val.wage}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
