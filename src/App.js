import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import User from "./components/users/User";

//import axios from "axios";
import GithubState from "./context/github/githubState";
import AlertState from "./context/alert/alertState";
import About from "./components/pages/About";
import Alert from "./components/layout/Alert";
import NotFound from "./components/pages/NotFound";
import "./App.css";

const App = () => {
  //const [users, setUsers] = useState([]);
  // const [user, setUser] = useState({});
  //const [repos, setRepos] = useState([]);
  //const [loading, setLoading] = useState(false);
  //const [alert, setAlert] = useState(null);
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

  // Alert

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar title="Github-Finder" icon="fab fa-github" />
            <div className="container">
              <Alert />
              <Switch>
                <Route
                  exact
                  path="/"
                  component={Home}
                  // render={props => (
                  //   // <Fragment>
                  //   //   <Search
                  //   //   //searchUsers={searchUsers}
                  //   //   // clearUsers={clearUsers}
                  //   //   // showClear={users.length > 0 ? true : false}
                  //   //   //setAlert={showAlert}
                  //   //   />
                  //   //   <Users />
                  //   // </Fragment>
                  // )}
                />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login"
                  component={User}
                  // render={props => (
                  //   <User
                  //     {...props}
                  //     //getUser={getUser}
                  //     //getUserRepos={getUserRepos}
                  //     //user={user}
                  //    // repos={repos}
                  //     //loading={loading}
                />
                <Route component={NotFound} />
                )} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
