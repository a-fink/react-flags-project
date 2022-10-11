import NavBar from './Navigation/NavBar';
import HomePageContainer from './HomePage/HomePageContainer';
import {Route, Switch} from 'react-router-dom';


// always render the navigation bar
// render the rest of the page according to the routes - all flags on home page, flag details when flag is chosen, 404 page when nothing matches
function App() {
  // ** TODO **
  // set up light/dark mode switching, for now going to give the mounted app div the light mode
  const colorMode = 'light';

  return (
    <div className={`app ${colorMode}`}>
        <NavBar />
        <Switch>
          <Route exact path='/'>
            <HomePageContainer />
          </Route>
          <Route path='/flags/:flagId'>
            {/* FILL ME IN */}
          </Route>
          <Route>
            {/* FILL ME IN */}
          </Route>
        </Switch>
    </div>
  );
}

export default App;
