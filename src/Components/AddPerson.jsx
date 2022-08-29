import React from "react";
import axios from "axios";

const AddPerson = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
}) => {
  const addPerson = (event) => {
    event.preventDefault();
    const personaObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    axios.post("http://localhost:3001/persons", personaObj).then((response) => {
      setPersons(persons.concat(response.data));
      setNewName("");
    });

    if (persons.some((person) => person.name === newName)) {
      return alert("Este nombre ya está agendado.");
    } else {
      setPersons(persons.concat(personaObj));
      setNewName("");
      setNewNumber("");
    }
  };

  const handlePersonChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };
  return (
    <div>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handlePersonChange} />
        </div>
        <div>
          number <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
};

export default AddPerson;
