import { useState } from "react";
import { Search } from "../../assets";
import { SearchBarProps } from "../../types";

export const SearchBar = ({ onClick }: SearchBarProps) => {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="flex relative items-center">
      <input
        onChange={(e) => setSearchText(e.target.value)}
        className="border h-10 lg:w-80 outline-none pl-10 bg-transparent md:w-40"
        placeholder="Enter user name"
      />
      <div
        onClick={() => searchText && onClick(searchText)}
        className="text-base leading-none h-10 bg-sky-900 text-white px-5 grid place-items-center cursor-pointer"
      >
        Search
      </div>
      <Search className="absolute left-2 -z-10" />
    </div>
  );
};
