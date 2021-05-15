// display table that will have the employee info
import React from "react";
import "./style.css";

function Table(){
    return (
      <div className="table-responsive">
        <table className="table table-striped table-resposive text-center table-hover">
            <thead>
              <tr>
                <th>Image</th>
                <th>First Name <span className="downArrow" onClick={this.filterbyFirst}></span></th>
                <th>Last Name <span className="downArrow" onClick={this.filterbyLast}></span></th>
                <th>Phone</th>
                <th>Email</th>
                <th>DOB </th>
              </tr>
            </thead>
            { //First Name sort
              this.state.results && this.state.results.map(item =>
                item.name.first.toLowerCase().includes(this.state.search) ?
                  <tbody key={item.login.uuid}>
                    <tr>
                      <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                      <td >{item.name.first}</td>
                      <td >{item.name.last}</td>
                      <td >{item.phone}</td>
                      <td >{item.email}</td>
                    </tr>
                  </tbody>
                  :
                  //Last Name sort
                  item.name.last.toLowerCase().includes(this.state.search) ?
                    <tbody key={item.login.uuid}>
                      <tr>
                      <td ><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail" /></td>
                        <td >{item.name.first}</td>
                        <td >{item.name.last}</td>
                        <td >{item.phone} </td>
                        <td >{item.email}</td>
                      </tr>
                    </tbody>
                    : 
                    null 
              )}
          </table>
        </div>
    )
}
export default Table;