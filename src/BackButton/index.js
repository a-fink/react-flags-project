import './BackButton.css';
import {Link} from 'react-router-dom';

// inputs: variable for which color mode page is in
// returns: jsx component for the back button
function BackButton({lightMode}){
    const modeClass = (lightMode ? 'light-element' : 'dark-element');
    const hoverClass = (lightMode ? 'light-hover' : 'dark-hover');

    return (
        <button className={`back-button ${modeClass} ${hoverClass}`}>
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
