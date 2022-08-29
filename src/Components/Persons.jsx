import React from "react";

const Persons = ({ persons }) => {
  return (
    <div>
      <ul>
        <li>
          {persons.map((person) => {
            return (
              <li key={person.id}>
                {person.name} - {person.number}
              </li>
            );
          })}
        </li>
      </ul>
    </div>
  );
};

export default Persons;
