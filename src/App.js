import NavBar from './Navigation/NavBar';
import HomePageContainer from './HomePage/HomePageContainer';
import SingleFlagContainer from './SingleFlagPage/SingleFlagContainer';
import ErrorPage from './ErrorPage';
import Footer from './Footer';
import {Route, Switch} from 'react-router-dom';
import { useState } from 'react';



// inputs - none
// returns - div containing all other application elements
// always renders navigation and footer, rest of components rendered based on route in url
function App() {
  // state of light mode / dark mode, will be passed to all components to set CSS values throughout app
  const [lightMode, setLightMode] = useState(true);

  // click handler to pass to nav bar for light mode / dark mode component
  const modeClickHandler = () => {
    setLightMode((prevMode) => !prevMode);
  }

  const modeClass = (lightMode ? 'light' : 'dark');

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
