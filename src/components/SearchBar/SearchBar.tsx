import React from "react";

type Props = {
  updateQuery: (query: string) => void;
};

const SearchBar = ({ updateQuery }: Props) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      search: { value: string };
    };
    console.dir(target);

    updateQuery(target.search.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="search" placeholder="Search images and photos" />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
