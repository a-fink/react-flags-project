import BackButton from '../BackButton';
import './ErrorPage.css';

// inputs: variable for which color mode page is in
// returns: jsx component for the error page
function ErrorPage({lightMode}){
    const modeClass = (lightMode ? 'light-element' : 'dark-element');

    return(
        <div className='not-found-container'>
            <div className={`not-found-card ${modeClass}`}>
                <h2 className='not-found-header'>Page Not Found</h2>
                <p className='not-found-text'>An unknown error occured, please go back to the home page and try again</p>
                <BackButton lightMode={lightMode}/>
            </div>
        </div>
    )
}

export default ErrorPage;
