import { useState } from "react";
import "./searchBar.css";
import { useDispatch } from "react-redux";
import { getCountryByName } from "../../redux/actions";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const onSearch = (e) => {
    const value = e.target.value;
    setInput(value);
    dispatch(getCountryByName(value));
  };

  return (
    <div className="search">
      <input
        // value={searchBar}
        onChange={onSearch}
        placeholder="Search for your country..."
      ></input>
    </div>
  );
};
