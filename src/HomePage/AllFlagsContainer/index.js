import SmallFlagContainer from "../SmallFlagContainer";
import './AllFlagsContainer.css';
import {Redirect} from 'react-router-dom';
import {useState, useEffect, useMemo} from 'react';

// input - search string, filter string, variable for which color mode page is in
// returns - jsx component - will be either a div containing small flag containers, a loading message, or a redirect to the error page
function AllFlagsContainer({searchString, filterString, lightMode}){
    const modeClass = (lightMode ? 'light-element' : 'dark-element');

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [countries, setCountries] = useState(sessionStorage.getItem('countryData') === null ? [] : JSON.parse(sessionStorage.getItem('countryData')));

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
                    sessionStorage.setItem('countryData', JSON.stringify(result));
                    sessionStorage.setItem('lastUpdated', JSON.stringify(new Date().getTime()));
                    setIsLoaded(true);
                    setCountries(result);

                    const timeoutId = setTimeout(() => {
                        setCountries([]);
                    }, ONE_DAY_IN_MILLISECONDS);
                    return () => {
                        clearTimeout(timeoutId);
                    };
                })
                .catch((err) => {
                    sessionStorage.removeItem('countryData');
                    sessionStorage.removeItem('lastUpdated');
                    setIsLoaded(true);
                    setError(err);
                });
        }

        else{
            setIsLoaded(true);
        }
    }, [countries, dataOutOfDate]);

    // filter and alphabetize the data to get the countries to show the user - search/filter currently run independently, so at most one of those if statements will be true
    // memoize this value so we only re-calculate it when search or filter parameters change, or there has been a change in the underlying country data
    const visibleCountries = useMemo(() => {
        let visibleArray = countries;

        if(searchString !== ''){
            const searchStringLower = searchString.toLowerCase();
            visibleArray = visibleArray.filter(country => {
                return country.name.common.toLowerCase().includes(searchStringLower) || country.name.official.toLowerCase().includes(searchStringLower);
            });
        }

        if(filterString !== ''){
            const filterStringLower = filterString.toLowerCase();
            visibleArray = visibleArray.filter(country => country.region.toLowerCase() === filterStringLower);
        }

        if(visibleArray.length > 0){
            visibleArray.sort((a, b) => {
                if(a.name.common < b.name.common) return -1;
                else if(a.name.common > b.name.common) return 1;
                else return 0;
            });
        }

        return visibleArray;
    }, [searchString, filterString, countries]);

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

    // if data has loaded and visibleCountries is empty - show no results message to user
    else if(isLoaded && visibleCountries.length === 0){
        return (
            <div className="all-flags_no-results">
                <p className={`all-flags_message ${modeClass}`}>Your search returned no matching countries, please try again...</p>
            </div>
        );
    }

    // show user the sorted/filtered results as SmallFlagContainer components
    return (
        <div className="all-flags-container">
            {
                visibleCountries.map(country => {
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
