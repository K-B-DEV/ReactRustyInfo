import GlobalStyles from "./components/GlobalStyles";
import { useDispatch, useSelector } from "react-redux";
import { loadServers } from "./actions/serversActions";
import { useEffect } from "react";
//Pages
import HomePage from "./Pages/Home";
import GuidesPage from "./Pages/Guides";
import UpdatesPage from "./Pages/Updates";
import GreenCardDetails from "./components/GreenCardDetails";
import BlueCardDetails from "./components/BlueCardDetails";
import RedCardDetails from "./components/RedCardDetails";
import ElectricityDetails from "./components/ElectricityDetails";
//Routing
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import { useHistory } from "react-router";
import { changePage } from "./actions/serversActions";
import GettingStarted from "./components/GettingStarted";
function App() {
  const dispatch = useDispatch();
  // const page = useSelector((state) => state.page);
  const history = useHistory();
  // useEffect(() => {
  //   history.push(page);
  // }, [page]);

  // console.log(location.pathname + "<- pathname");
  dispatch(changePage("/"));
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          {/* Guides Page */}
          <Route path="/Guides/GreenCard">
            <GreenCardDetails />
          </Route>
          <Route path="/Guides/BlueCard">
            <BlueCardDetails />
          </Route>
          <Route path="/Guides/RedCard">
            <RedCardDetails />
          </Route>
          <Route path="/Guides/GettingStarted">
            <GettingStarted />
          </Route>
          <Route path="/Guides/Electricity">
            <ElectricityDetails />
          </Route>
          <Route path="/Guides">
            <GuidesPage />
          </Route>
          <Route path="/Updates">
            <UpdatesPage />
          </Route>
          <Route path="/">
            {/* HomePage = ServerLookup */}
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
