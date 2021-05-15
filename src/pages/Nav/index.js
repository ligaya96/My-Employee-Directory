import React from "react";
import "./style.css";
// working on navbar
function Navbar() {
    return(
     <div className="flex-column row bg-dark text-white mb-3">
          <div className="text-light">
            <h1> Ligaya's Employee Directory</h1>
          </div>
          <div className="text-center">
            <h6>Filter Employees?</h6>
          </div>
     </div>
    )
}
export default Navbar;
