import { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './SingleFlagCard.css';

// input - a country found from the API by the parent component, variable for which color mode page is in
// output - a JSX element rendering the country flag and information
function SingleFlagCard({country, lightMode}){
    const modeClass = (lightMode ? 'light-element' : 'dark-element');
    const hoverClass = (lightMode ? 'light-hover' : 'dark-hover');

    const [error, setError] = useState(null);
    const [neighbors, setNeighbors] = useState([]);

    // Get array of all neighboring countries - runs when component first mounts, and if list of border countries changes
    useEffect(() => {
        if(country.borders){
            fetch(`https://restcountries.com/v3.1/alpha?codes=${country.borders.join(',')}`)
            .then(res => res.json())
            .then((result) => {
                setNeighbors(result);
            })
            .catch((err) => {
                setError(err);
            })
        }
    }, [country.borders]);

    // parse currency & languages (if present) from country information
    let currencies, languages;

    if(!country.currencies){
       currencies = '';
    }

    else{
        let currencyArray = [];
        Object.values(country.currencies).forEach(value => {
            currencyArray.push(value.name);
        });
        currencies = currencyArray.join(', ');
    }

    if(!country.languages){
        languages = '';
    }

    else{
        let languagesArray = [];
        Object.values(country.languages).forEach(value => {
            languagesArray.push(value);
        });
        languages = languagesArray.join(', ');
    }

    // if an error happened in the above fetch redirect to the error page
    if(error){
        return <Redirect to='/error' />
    }

    // otherwise render the country info & links to borrdering countries
    // if no bordering countries found result from API will have a message property, show feedback for user
    return (
        <div className='single-flag-card'>
            <div className='single-flag_image-positioner'>
                <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="single-flag_image" />
            </div>
            <div className='single-flag_info-section'>
                <h2 className='single-flag_heading'>{country.name.common}</h2>
                <div className='single-flag_info'>
                    <p className="single-flag_category">
                        Region:
                        <span className="single-flag_data region">
                            {` ${country.region}`}
                        </span>
                    </p>
                    <p className="single-flag_category sub-region">
                        Sub Region:
                        <span className="single-flag_data">
                            {` ${country.subregion}`}
                        </span>
                    </p>
                    <p className="single-flag_category capital">
                        Capital:
                        <span className="single-flag_data">
                            {` ${country.capital}`}
                        </span>
                    </p>
                    <p className="single-flag_category population">
                        Population:
                        <span className="single-flag_data">
                            {` ${country.population.toLocaleString('en-US')}`}
                        </span>
                    </p>
                    <p className="single-flag_category tld">
                        Top Level Domain:
                        <span className="single-flag_data">
                            {` ${country.tld}`}
                        </span>
                    </p>
                    <p className="single-flag_category currency">
                        Currencies:
                        <span className="single-flag_data">
                            {` ${currencies}`}
                        </span>
                    </p>
                    <p className="single-flag_category language">
                        Languages:
                        <span className="single-flag_data">
                            {` ${languages}`}
                        </span>
                    </p>
                </div>
                <div className='single-flag_neighbors'>
                    <p className="single-flag_category">Border Countries: </p>
                    <div className='neighbors-container'>
                        {(neighbors.length === 0 || neighbors.message) ?
                        <p className='no-neighbors-text'>No neighboring countries</p> :
                        neighbors.map((el) => {
                            return (
                                <Link to={`/countries/${el.cca3}`} key={`${country.cca3}-neighbor-${el.cca3}`}>
                                    <div className={`neighbors-link ${modeClass} ${hoverClass}`}>
                                        {`${el.name.common}`}
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleFlagCard;
