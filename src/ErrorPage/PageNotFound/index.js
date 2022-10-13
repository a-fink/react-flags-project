import BackButton from '../../BackButton';
import './PageNotFound.css';
import {useHistory} from 'react-router-dom'
import {useEffect} from 'react';

// inputs: variable for which color mode page is in
// returns: jsx component for the error page
function PageNotFound({lightMode}){
    // useHistory and useEffect to add this page to the browser history for back/refresh after render
    // only do on first render
    const history = useHistory();
    useEffect(() => {
        history.push(`/error`);
    }, [history]);

    // set the mode classname variables based on the value of lightMode
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

export default PageNotFound;
