import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";
const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const loadOptions = (inputValue) => {
    return fetch(
      "${GEO_API_URL}/cities?namePrefix=${inputValue}",
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  };
  const handelOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search for Cities"
      debounceTimeout={600}
      value={search}
      onChange={handelOnChange}
      loadOptions={loadOptions}
    />
  );
};
export default Search;
