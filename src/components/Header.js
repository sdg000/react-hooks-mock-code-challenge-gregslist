import React from "react";
import Search from "./Search";

function Header({OnsetSearchVal}) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search OnsetSearchVal={OnsetSearchVal}/>
    </header>
  );
}

export default Header;
