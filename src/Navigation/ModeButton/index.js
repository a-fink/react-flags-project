import './ModeButton.css';

// inputs: variable for which color mode page is in, click handler to use in the mode button
// returns: jsx element for the color mode button
function ModeButton({lightMode, modeClickHandler}) {
    // set the iconName and modeClass name based on the value of the lightMode prop
    const iconName = (lightMode ? "moon-outline" : "moon");
    const modeClass = (lightMode ? 'light-element' : 'dark-button');
    const hoverClass = (lightMode ? 'light-hover' : 'dark-hover');

    return (
        <button className={`mode-button ${modeClass} ${hoverClass}`} onClick={modeClickHandler}>
            <ion-icon name={iconName} className="moon-icon"></ion-icon>
            <span className="mode-text">Dark Mode</span>
        </button>
    );
}

export default ModeButton;
