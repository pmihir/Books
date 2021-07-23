import Home from "./pages/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./styles/styles.scss";
import PageByCategory from "./pages/PageByCategory/PageByCategory";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/:category">
          <PageByCategory />
        </Route>
      </Switch>
    </Router>
  );
}
