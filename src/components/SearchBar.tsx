import React from "react";

interface SearchBarProps {
  search: string;
  onSearchChange: (search: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, onSearchChange }) => {
  return (
    <div className="mb-4 max-w-[400px] m-auto">
      <input
        type="text"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search User"
        className="w-full p-2 border rounded border-[#000]"
      />
    </div>
  );
};

export default SearchBar;
