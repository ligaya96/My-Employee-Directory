//  search name and DOB using props
import React from "react";
import "./style.css";
function Search(props){
    return(
        <form>
            <div className="input-field">
             <input
               value={props.search}
               onChange={props.handleInputChange}
               name="search"
                type="text"
               className="form-control"
              placeholder="Enter here to find a name"
              id="search"
             />
             </div>
        </form>
    );
}
export default Search;