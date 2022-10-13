import './NavBar.css';
import ModeButton from '../ModeButton';

// inputs: variable for which color mode page is in, click handler to pass on to the mode button
// returns: jsx component for the nav bar at the top of the page
function NavBar({lightMode, modeClickHandler}){
    // set navClass variable based on lightMode
    const modeClass = (lightMode ? 'light-element' : 'dark-element');

    return (
        <nav className={modeClass}>
            <h1>Where in the world?</h1>
            <ModeButton lightMode={lightMode} modeClickHandler={modeClickHandler}/>
        </nav>
    );
}

export default NavBar;
