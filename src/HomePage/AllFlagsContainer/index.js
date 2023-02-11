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
    const [countries, setCountries] = useState([]);

    // useEffect to fetch from API based on search string - runs when component mounts and anytime search string changes
    useEffect(() => {
        setIsLoaded(false);

        fetch(`https://restcountries.com/v3.1/${searchString}`)
            .then(res => res.json())
            .then((result) => {
                setIsLoaded(true);

                // if result from API has a message property then no data was found, otherwise sort result countries in alphabetical order
                if(!result.message){
                    result.sort((a, b) => {
                        if(a.name.common < b.name.common) return -1;
                        else if(a.name.common > b.name.common) return 1;
                        else return 0;
                    });
                }

                setCountries(result);
            })
            .catch((err) => {
                setIsLoaded(true);
                setError(err);
            });
    }, [searchString]);

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
