import NavBar from './Navigation/NavBar';
import HomePageContainer from './HomePage/HomePageContainer';
import SingleFlagContainer from './SingleFlagPage/SingleFlagContainer';
import ErrorPage from './ErrorPage';
import Footer from './Footer';
import {Route, Switch} from 'react-router-dom';
import { useState } from 'react';



// inputs - none
// return - div containing all other application elements
// will always render the navigation bar
// will render the rest of the page according to the routes - all flags on home page, flag details when flag is chosen, 404 page when nothing matches
function App() {
  // useState to get value of whether we're in light mode (true) or dark mode (false)
  // default state is true
  const [lightMode, setLightMode] = useState(true);

  // click handler that will be called by the dark mode button to set the light mode/dark mode state
  // state switches each time it is clicked
  const modeClickHandler = () => {
    setLightMode((prevMode) => !prevMode);
  }

  // set the mode classname for the outer div based on lightMode's value
  const modeClass = (lightMode ? 'light' : 'dark');

  // pass the lightMode variable to all child elements so CSS can be set down the tree
  // mass the click handler function to the nav bar
  return (
    <div className={`app ${modeClass}`}>
        <NavBar lightMode={lightMode} modeClickHandler={modeClickHandler}/>
        <Switch>
          <Route exact path='/'>
            <HomePageContainer lightMode={lightMode} />
          </Route>
          <Route path='/countries/:code'>
            <SingleFlagContainer lightMode={lightMode} />
          </Route>
          <Route>
            <ErrorPage lightMode={lightMode}/>
          </Route>
        </Switch>
        <Footer lightMode={lightMode} />
    </div>
  );
}

export default App;
