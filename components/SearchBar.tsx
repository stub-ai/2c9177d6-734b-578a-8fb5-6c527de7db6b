import React, { ChangeEvent } from 'react';

type SearchBarProps = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full p-2 border rounded-md"
      placeholder="Search links..."
    />
  );
};

export default SearchBar;