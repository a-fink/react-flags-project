import './BackButton.css';

function BackButton(){
    return (
        <button className='back-button'>
            <ion-icon name="arrow-back-outline" className="back-arrow-icon"></ion-icon>
            Back
        </button>
    );
}

export default BackButton;
