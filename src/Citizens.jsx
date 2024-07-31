import React, { useState } from "react";
import Citizen from "./Citizen";
import SearchFilter from "./SearchFilter";

const citizensData = [
  { name: "John", age: 30, address: "City of Naga", status: "Active" },
  { name: "Jane", age: 25, address: "Minglanilla", status: "Active" },
  { name: "Mike", age: 40, address: "City of Naga", status: "Inactive" },
  { name: "Lisa", age: 35, address: "Minglanilla", status: "Active" },
  { name: "John", age: 20, address: "City of Naga", status: "Inactive" },
  { name: "Jane", age: 50, address: "City of Naga", status: "Active" },
  { name: "Mike", age: 60, address: "Minglanilla", status: "Inactive" },
  { name: "Lisa", age: 45, address: "City of Naga", status: "Active" },
  { name: "John", age: 55, address: "Minglanilla", status: "Inactive" },
  { name: "Jane", age: 65, address: "Minglanilla", status: "Active" },
];

const Citizens = () => {
  const [filteredCitizens, setFilteredCitizens] = useState(citizensData);

  const toggleStatus = (index) => {
    const newCitizens = [...filteredCitizens];
    newCitizens[index].status =
      newCitizens[index].status === "Active" ? "Inactive" : "Active";
    setFilteredCitizens(newCitizens);
  };

  return (
    <div>
      <SearchFilter
        setFilteredCitizens={setFilteredCitizens}
        citizensData={citizensData}
      />

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredCitizens.map((citizen, index) => (
            <Citizen
              key={index}
              index={index}
              citizen={citizen}
              toggleStatus={toggleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Citizens;
