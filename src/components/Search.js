import React, {useState} from "react";

function Search({OnsetSearchVal}) {

  /**DELIVERABLE 4 EXT: SEARCH ITEMS BY THEIR NAMES.
   * create search variable and save to state, with initial value of ""
   * onChange, call setSearch and pass Onchange value
   * export search by passing it to callback function from ListingContainer Component to be use to filter items to display
   * 
   * DOBU
   */

  const [search, setSearch] = useState("")

  function onEnterSearch(e){
    setSearch(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    OnsetSearchVal(search)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={onEnterSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
