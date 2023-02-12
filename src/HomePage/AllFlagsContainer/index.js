import SmallFlagContainer from "../SmallFlagContainer";
import './AllFlagsContainer.css';
import {Redirect} from 'react-router-dom';
import {useState, useEffect} from 'react';

// input - search string from parent, variable for which color mode page is in
// returns - jsx component - either a div containing small flag containers, a loading message, or a redirect to the error page
function AllFlagsContainer({searchString, lightMode}){
    const modeClass = (lightMode ? 'light-element' : 'dark-element');

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countries, setCountries] = useState(JSON.parse(sessionStorage.getItem('countryData')) || []);

    const ONE_DAY_IN_MILLISECONDS = 86400000;

    // data is out of date if lastUpdated value exists in session storage and is more than one day ago (date stored/retrieved in miliseconds)
    const dataOutOfDate = sessionStorage.getItem('lastUpdated') === null ? false : new Date().getTime() - parseInt(sessionStorage.getItem('lastUpdated')) > ONE_DAY_IN_MILLISECONDS;

    // fetch all country data from API and store it in session storage - timeout/dataOutOfDate will force a refresh of data once per day - if error fetching occurs clear session storage
    useEffect(() => {
        if(countries.length === 0 || dataOutOfDate){
            setIsLoaded(false);

            fetch(`https://restcountries.com/v3.1/all`)
                .then(res => res.json())
                .then((result) => {
                    setIsLoaded(true);

                    // if result from API has a message property then no data was found, otherwise sort result countries in alphabetical order
                    // if(!result.message){
                    //     result.sort((a, b) => {
                    //         if(a.name.common < b.name.common) return -1;
                    //         else if(a.name.common > b.name.common) return 1;
                    //         else return 0;
                    //     });
                    // }

                    sessionStorage.setItem('countryData', JSON.stringify(result));
                    sessionStorage.setItem('lastUpdated', JSON.stringify(new Date().getTime()));
                    setCountries(result);

                    const timeoutId = setTimeout(() => {
                        setCountries([]);
                    }, ONE_DAY_IN_MILLISECONDS);
                    return () => {
                        clearTimeout(timeoutId);
                    };
                })
                .catch((err) => {
                    setIsLoaded(true);
                    setError(err);
                    sessionStorage.removeItem('countryData');
                    sessionStorage.removeItem('lastUpdated');
                });
        }
        else{
            setIsLoaded(true);
        }
    }, [countries, dataOutOfDate]);

    // if an error happened redirect to the error page
    if(error){
        return <Redirect to='/error' />
    }

    // if isLoaded is false display a loading message
    else if(!isLoaded){
        return (
            <div className="all-flags_loading">
                <p className={`all-flags_message ${modeClass}`}>Loading...</p>
            </div>
        );
    }

    // if data has loaded and a message key exists then no results were found - show no results message to user
    else if(isLoaded && countries.message){
        return (
            <div className="all-flags_no-results">
                <p className={`all-flags_message ${modeClass}`}>Your search returned no matching countries, please try again...</p>
            </div>
        );
    }

    // if data was found found map all items in the countries array to small flag container components
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
                            lightMode={lightMode}
                        />
                    );
                })
            }
        </div>
    );
}

export default AllFlagsContainer;
