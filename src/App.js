import NavBar from "./NavBar";
import {Route, Switch} from 'react-router-dom';


// always render the navigation bar
// render the rest of the page according to the routes - all flags on home page, flag details when flag is chosen, 404 page when nothing matches
function App() {
  return (
    <>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            {/* FILL ME IN */}
          </Route>
          <Route path='/flags/:flagId'>
            {/* FILL ME IN */}
          </Route>
          <Route>
            {/* FILL ME IN */}
          </Route>
        </Switch>
    </>
  );
}

export default App;
