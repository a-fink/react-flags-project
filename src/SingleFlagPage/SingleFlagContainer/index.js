import BackButton from "../../BackButton";
import SingleFlagCard from "../SingleFlagCard";
import './SingleFlagContainer.css';
import { useParams, Redirect } from 'react-router-dom';
import { useState, useEffect} from 'react';

// inputs: variable for which color mode page is in to pass on to child elements
// returns: jsx elements for the single country details page
function SingleFlagContainer({lightMode}) {
    // get the country code from the route parameters
    const {code} = useParams();

    // useState to get values for whether data has loaded, the country, and whether there was an error
    // starting states are no errors, loaded is false, and countries is an empty object
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [country, setCountry] = useState({});


    // useEffect to search based on country code gotten from the parameters
    // this function component should only get re-run/re-rendered each time a new url happens
    // from it's parent component or if someone links to the page, but just in case make it run anytime code changes
    // even when searching for one country by code, API returns an array, so use 1st element in result
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
        .then(res => res.json())
        .then((result) => {
            setIsLoaded(true);
            setCountry(result[0]);
        })
        .catch((err) => {
            setIsLoaded(true);
            setError(err);
        })
    }, [code]);

    // if an error happened redirect to the error page
    // when a request fails the response object will have a message key
    // code will be valid code if user came from a country card on the home page
    // but if they type url/try to link directly there could be invalid code
    // for this case, also send them to the error page
    if(error || country.message){
        return <Redirect to='/error' />
    }
    // if isLoaded is false display a loading message
    else if(!isLoaded){
        return (
            <div className="single-flag-container">
                <div className="back-button-positioner">
                    <BackButton lightMode={lightMode}/>
                </div>
                <div className="single-flag_loading">
                    <p className="single-flag_message">Loading...</p>
                </div>
            </div>
        );
    }
    // finally if data found send the country to the single flag card to render
    else{
        return (
            <div className="single-flag-container">
                <div className="back-button-positioner">
                    <BackButton lightMode={lightMode}/>
                </div>
                <SingleFlagCard country={country} lightMode={lightMode} />
            </div>
        );
    }
}

export default SingleFlagContainer;
