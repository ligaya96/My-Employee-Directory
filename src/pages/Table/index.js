// display table that will have the employee info
import React from "react";
import "./style.css";

function Table( props ){
    return (
      <div className="table-responsive">
        <table className="table table-striped table-resposive text-center table-hover">
            <thead>
              <tr>
                <th>Image</th>
                <th>First Name  <span className='sortable th-inner' onClick={() => props.sortByName('first')}>First&#160;</span></th>
                <th>Last Name <span className='th-inner sortable' onClick={() => props.sortByName('last')}>Last&#160;</span></th>
                <th>Phone</th>
                <th>Email</th>
              </tr>
            </thead>
                  <tbody>
                  {props.state.filteredEmployees.map((employee) => {
                    return(
                    <tr key={employee.id.value}>
                      <td ><img src={employee.picture.thumbnail} className="rounded-circle" alt={employee.name.last} /></td>
                      <td >{employee.name.first}</td>
                      <td >{employee.name.last}</td>
                      <td >{employee.phone}</td>
                      <td >{employee.email}</td>
                    </tr>
                    );
                  })}
                  </tbody>
          </table>
        </div>
    )
}
export default Table;