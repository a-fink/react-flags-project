import BackButton from '../../BackButton';
import './PageNotFound.css';

function PageNotFound(){
    return(
        <div className='not-found-outer'>
            <h2 className='not-found-header'>Page Not Found</h2>
            <p className='not-found-text'>An unknown error occured, please go back to the home page and try again</p>
            <BackButton />
        </div>
    )
}

export default PageNotFound;
