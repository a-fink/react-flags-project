import './BackButton.css';
import {Link} from 'react-router-dom';

// inputs: variable for which color mode page is in
// returns: jsx component for the back button
function BackButton({lightMode}){
    // set the mode classname variables based on the value of lightMode
    const modeClass = (lightMode ? 'light-element' : 'dark-element');

    return (
        <button className={`back-button ${modeClass}`}>
            <Link to='/' className='back-button-link'>
                <span className="back-arrow-icon">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </span>
                Back
            </Link>
        </button>
    );
}

export default BackButton;
