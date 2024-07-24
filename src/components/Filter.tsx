import React from "react";

interface FilterProps {
  gender: string | undefined;
  onGenderChange: (gender: string | undefined) => void;
}

const Filter: React.FC<FilterProps> = ({ gender, onGenderChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onGenderChange(event.target.value === "" ? undefined : event.target.value);
  };

  return (
    <div className="mb-4 w-[300px] m-auto">
      <label htmlFor="gender" className="mr-2">
        Filter by Gender:
      </label>
      <select
        id="gender"
        value={gender || ""}
        onChange={handleChange}
        className="p-2 border rounded"
      >
        <option value="">All</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default Filter;
