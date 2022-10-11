import './ModeButton.css';

function ModeButton() {
    // ** TO DO ** add switching, for now setting to light mode image
    const iconName = "moon-outline";

    return (
        <button className="mode-button">
            <ion-icon name={iconName} className="moon-icon"></ion-icon>
            <span className="mode-text">Dark Mode</span>
        </button>
    );
}

export default ModeButton;
