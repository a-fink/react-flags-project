import './BackButton.css';
import {Link} from 'react-router-dom';

function BackButton(){
    return (
        <button className='back-button'>
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
