import React, { useState } from "react";
import Filter from "./Components/Filter";
import "./App.css";
import AddPerson from "./Components/AddPerson";
import Persons from "./Components/Persons";
import axios from "axios";
import { useEffect } from "react";
import Notification from "./Components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [newFilter, setNewFilter] = useState("");
  const [goodMessage, setGoodMessage] = useState(null);

  const hook = () => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  };

  useEffect(hook, []);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={goodMessage} />
      <Filter
        persons={persons}
        newFilter={newFilter}
        setNewFilter={setNewFilter}
      />
      <h2>Add a new</h2>
      <AddPerson
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        setNewName={setNewName}
        newNumber={newNumber}
        setNewNumber={setNewNumber}
        setGoodMessage={setGoodMessage}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} setPersons={setPersons} />
    </div>
  );
};

export default App;
