import React, { useState } from "react";

function Search({searchValue, handleSearch}) {
 

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchValue} onChange={handleSearch}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
