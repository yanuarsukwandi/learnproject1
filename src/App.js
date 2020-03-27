import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";
import Alert from "./components/layout/Alert";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  };
  // https get request by axios
  // dont forget to use componentDidMount if want to get request
  //async componentDidMount() {
  //this.setState({ loading: true });
  //dont forget get the client id dan client secret
  // const res = await axios.get(
  // `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  // );
  // this.setState({ users: res.data, loading: false });
  // }
  // Search Github users
  searchUsers = async text => {
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };
  // Clear User
  clearUsers = () => this.setState({ users: [], loading: false });
  // Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 3000);
  };
  render() {
    return (
      <div className="App">
        <Navbar title="Github-Finder" icon="fab fa-github" />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
