import './App.css';
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import List from "./Todo/List";
import Header from "./Shared/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Redirect to="/todo" />
            </Route>
            <Route exact path="/todo" component={List} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
