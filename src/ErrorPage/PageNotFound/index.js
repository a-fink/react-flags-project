import BackButton from '../../BackButton';
import './PageNotFound.css';

function PageNotFound(){
    return(
        <div className='not-found-container'>
            <div className='not-found-card'>
                <h2 className='not-found-header'>Page Not Found</h2>
                <p className='not-found-text'>An unknown error occured, please go back to the home page and try again</p>
                <BackButton />
            </div>
        </div>
    )
}

export default PageNotFound;
