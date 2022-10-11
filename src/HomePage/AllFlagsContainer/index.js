import SmallFlagContainer from "../SmallFlagContainer";
import './AllFlagsContainer.css';
import {Redirect} from 'react-router-dom';
import {useState, useEffect} from 'react';

// input - search string from parent - either a region from filter, or a name from search bar, or all
// returns - jsx component of a div containing small flag containers for all countries found by the search
// redirects to the error page if an error occurs, displays a note that no results were found if search comes up empty
function AllFlagsContainer(searchString){
    // **TODO** use searchString coming in from parent to find the filtered array of flags
    // for now, using 'all' to get the mapping down to the small flag container working
    const tempSearchString = 'all';

    // useState to get values for whether data has loaded, the countries array, and whether there's an error
    // starting states are no errors, loaded is false, and countries is an empty array
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countries, setCountries] = useState([]);

    // **TODO** replace temp string below with the search string prop once get parent filtering set up
    // useEffect to search based on the search string
    // this function component will get re-run/re-rendered each time the search string
    // changes in it's parent component, so we only want this useEffect search to happen the first time
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/${tempSearchString}`)
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);
                setCountries(result);
            })
            .catch((err) => {
                setIsLoaded(true);
                setError(err);
            });
    }, []);

    // if an error happened redirect to the error page
    if(error){
        return <Redirect to='/error' />
    }
    // if isLoaded is false display a loading message
    else if(!isLoaded){
        return (
            <div className="all-flags_loading">
                <p className="all-flags_message">Loading...</p>
            </div>
        );
    }
    // when a request fails to find results the response object will have a message key
    // if data has loaded and a message key exists then no results were found - show message to that effect
    else if(isLoaded && countries.message){
        return (
            <div className="all-flags_no-results">
                <p className="all-flags_message">Your search returned no matching countries, please try again...</p>
            </div>
        );
    }
    // finally if data found map all items in the countries array to a small flag container component
    else{
        return (
            <div className="all-flags-container">
                {
                    countries.map(country => {
                        return (
                            <SmallFlagContainer
                                name={country.name.common}
                                population={country.population}
                                region={country.region}
                                capital={country.capital}
                                flag={country.flags.png}
                                code={country.cca3}
                                key={country.cca3}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default AllFlagsContainer;
