//Container! 
import React, {Component} from "react";
import Table from "../Table";
import Alert from "../Alert";
import API from "../../api/api.js";
import Search from "../Searchemployee";
import Footer from "../Footer";

class Container extends Component {
    state = {
        search:"",
        employees: [{}],
        sortingEmp: "ASC",
        error: "",
        filteredEmployees: [],
    };

// Component Mounts, API calls to get employess
componentDidMount(){ 
   API.getEmployeeList()
     .then((res) =>
     this.setState({
      employees: res.data.results,
      filteredEmployees: res.data.results,
    })
    )
    .catch((err) => {
    this.setState({ error: err.message });
    });
}

// Handle input for search 
handleInputChange = async(events) => {
  const values = events.target.values;
  this.setState({ search: values });
  this.filterEmployees(values);
};
//Filter employees 
filterEmployees = (values) => {
  this.setState({
      filteredEmployees: this.state.employees.filter((employees) => {
          return (
              employees.name.last.toLowerCase().includes(values.toLowerCase().trim()) ||
              employees.name.first.toLowerCase().includes(values.toLowerCase().trim())
          );
      }),
  });
  this.errorMessage(this.state.filteredEmployees);
};
// allows search to filter employees by last name and first. 
sortByName = (key) => {
  let employeeList;
  let direction;
  switch (key) {
      case 'last':
          if (this.state.sortingEmp === 'ASC') {employeeList = this.state.filteredEmployees.sort((x, y) => x.name.last > y.name.last ? 1 : -1  );
              direction = 'DSC';
          } else {
            employeeList  = this.state.filteredEmployees.sort((x, y) => x.name.last < y.name.ast ? 1 : -1 );
              direction = 'ASC';
          }
          break;
      case 'first':
          if (this.state.sortingEmp === 'ASC') {
            employeeList  = this.state.filteredEmployees.sort((x, y) =>
                  x.name.first > y.name.first ? 1 : -1
              );
              direction = 'DSC';
          } else {
            employeeList  = this.state.filteredEmployees.sort((x, y) =>
                  x.name.first < y.name.first ? 1 : -1
              );
              direction = 'ASC';
          }
          break;
      default:
          break;
  }
  this.setState({
      filteredEmployees: employeeList,
      sortingEmp: direction,
  });
};
 // Error Message
 errorMessage = (values) => {
    if (values.length === 0) {
      let err = "Sorry, no results.";
      this.setState({ error: err });
    } else {
      this.setState({ error: "" });
    }
};
// Render
render() {
  return (
      <div className="row">
        <div className="col">
          <div className="container">
            <Search value={this.state.search} handleInputChange={this.handleInputChange}/>
            <div className="fixed-table-container table-responsive-md">
              <Table
                state={this.state}
                filterEmployees={this.filterEmployees}
                sortName={this.sortName}
              />
            </div>
            {/* {//Alert for any API Errors} */}
            <Alert
              type="warning"
              style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}>
              {this.state.error}
            </Alert>
            <Footer/>
          </div>
        </div>
      </div>
    );
}
};

export default Container;
