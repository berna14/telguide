import axios from "axios";
import React from "react";

const Persons = ({ persons, setPersons }) => {
  const handleDelete = (id, name) => {
    if (window.confirm(`Desea eliminar a ${name} ?`)) {
      axios.delete(`http://localhost:3001/persons/${id}`).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
      });
    }
  };
  return (
    <div>
      <ul>
        {persons.map((person) => {
          return (
            <div>
              <li key={person.id}>
                {person.name} - {person.number}{" "}
              </li>
              <button onClick={() => handleDelete(person.id, person.name)}>
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Persons;
