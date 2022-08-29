import React from "react";

const Filter = ({ newFilter, setNewFilter, persons }) => {
  const handleFilterChange = (event) => {
    console.log(event.target.value);
    setNewFilter(event.target.value);
  };

  let filteredPersons = persons.filter((person) => {
    return (
      person.name.toLowerCase().includes(newFilter.toLowerCase()) ||
      person.number?.includes(newFilter)
    );
  });

  return (
    <div>
      <div>
        filter shown with{" "}
        <input value={newFilter} onChange={handleFilterChange} />
        <ul>
          {filteredPersons.map((filteredPerson) => {
            return (
              <li key={filteredPerson.id}>
                {filteredPerson.name} - {filteredPerson.number}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
