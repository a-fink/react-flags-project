import BackButton from "../../BackButton";
import SingleFlagCard from "../SingleFlagCard";
import './SingleFlagContainer.css';
import { useParams, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

// inputs: variable for which color mode page is in to pass on to child elements
// returns: jsx elements for the single country details page
function SingleFlagContainer({lightMode}) {
    // get the country code from the route parameters
    const {code} = useParams();

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [country, setCountry] = useState({});

    // fetch country information from API based on code from url - runs when component mounts or if code changes
    // API returns an array regardless of number of results, use first item
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

    // if an error happened or code is invalid redirect to the error page
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

    // if data was found send country to the single flag card component to render
    return (
        <div className="single-flag-container">
            <div className="back-button-positioner">
                <BackButton lightMode={lightMode}/>
            </div>
            <SingleFlagCard country={country} lightMode={lightMode} />
        </div>
    );
}

export default SingleFlagContainer;
