import React from "react";
import axios from "axios";
import noteService from "../services/notes";

const AddPerson = ({
  persons,
  setPersons,
  newName,
  setNewName,
  newNumber,
  setNewNumber,
  setGoodMessage,
}) => {
  const addPerson = (event) => {
    event.preventDefault();
    const personaObj = {
      name: newName,
      number: newNumber,
    };

    if (persons.some((person) => person.name === newName)) {
      if (window.confirm("Deseas modificar este usuario ya existente?")) {
        const persona = persons.find(
          (person) => person.name.toLowerCase() === newName.toLowerCase()
        );
        axios
          .put(`http://localhost:3001/persons/${persona.id}`, personaObj)
          .then((response) => {
            setPersons(
              persons.map((person) =>
                person.id !== persona.id ? person : response.data
              )
            );
            setNewName("");
            setNewNumber("");
          });
        setGoodMessage(`La persona ${newName} ha sido modificada con exito`);
        setTimeout(() => {
          setGoodMessage(null);
        }, 5000);
      }
    } else {
      noteService.create(personaObj).then((response) => {
        setPersons(persons.concat(response));
        setNewName("");
        setNewNumber("");
      });
      setGoodMessage(`La persona ${newName} ha sido añadida con exito`);
      setTimeout(() => {
        setGoodMessage(null);
      }, 5000);
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
