//Container! 
import React, {Component} from "react";
import Table from "../Table";
import Alert from "../Alert";
import API from "../../api/api.js";
import Search from "../Searchemployee";

class Container extends Component {
    state = {
        search:"",
        employees: [],
        sortingEmp: "ASC",
        error: "",
        filteredEmployees: [],
    };
};
//Component Mounts, API calls to get employess
ComponentDidMount = () => { 
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
handleInputChange = async (events) => {
    if (events.target.name === "search"){
        const Searchname = events.target.value.tolowercase();
        this.setState({
            search:Searchname
        })
    }
}
//Filter by first name.
filterbyFirst = () => {
    const filterEmployees = this.state.results.sort((a,b) =>{
        if (b.name.first > a.name.first) {
            return -1
        }
        if (a.name.first > b.name.first){
            return 1
        }return 0;
    });
    if (this.state.sortingEmp === "DESC"){
        filterEmployees.reverse();
        this.setState({ sortingEmp: "ASC"});
    }
    else { this.setState({ sortingEmp: "DESC"});
    } this.setState({results: sortingEmp})
}
//Filter by Last Name
filterbyLast = () => {
    const filterEmployees = this.state.results.sort((a,b) =>{
        if (b.name.last > a.name.last) {
            return -1
        }
        if (a.name.last > b.name.last){
            return 1
        }return 0;
    });
    if (this.state.sortingEmp === "DESC"){
        filterEmployees.reverse();
        this.setState({ sortingEmp: "ASC"});
    }
    else { this.setState({ sortingEmp: "DESC"});
    } this.setState({results: sortingEmp})
} 
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
render = () => {
    return (
        <div className="row">
          <div className="col">
            <div className="container">
              <Search
                value={this.state.search}
                handleInputChange={this.handleInputChange}
              />
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
                style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
              >
                {this.state.error}
              </Alert>
            </div>
          </div>
        </div>
      );
}
export default Container;
