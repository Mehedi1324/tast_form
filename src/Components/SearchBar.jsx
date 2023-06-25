import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';

const SearchBar = () => {
  return (
    <div>
      <div className="">
        <input
          type="text"
          placeholder="Going to"
          className="font-semibold h-20 p-2 text-[20px] border-b-[2px] outline-none  border-b-gray-600/50 w-full rounded-t-lg bg-white"
        />
        <span className="text-center  ">
          <BiSearchAlt2 className="text-[40px] w-full mx-auto mt-10" />
          <p>Search by destination, accommodations, or landmark</p>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
