import { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './SingleFlagCard.css';

// input - a country found from the API by the parent component, and variable for which color mode page is in
// output - a JSX element rendering the country flag and information
function SingleFlagCard({country, lightMode}){
    // set color mode variables based on lightMode
    const modeClass = (lightMode ? 'light-element' : 'dark-element');
    const hoverClass = (lightMode ? 'light-hover' : 'dark-hover');

    // useState to get the county's neighbors, and whether there was an error
    // starting states are no errors, and neighbors is an empty array
    const [error, setError] = useState(null);
    const [neighbors, setNeighbors] = useState([]);

    // useEffect to get array of all neighboring countries
    // should only run at the first render, or if somehow the country's borders change
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

    // get a string of the currencies & languages from the country object
    let currencies, languages;

    // some countries have no currency, when that happens set to empty string
    if(!country.currencies){
       currencies = '';
    }
    // country.currencies returns an object, push all values to array then join to string
    else{
        let currencyArray = [];
        Object.values(country.currencies).forEach(value => {
            currencyArray.push(value.name);
        });
        currencies = currencyArray.join(', ');
    }

    // some countries have no language, when that happens set to empty string
    if(!country.languages){
        languages = '';
    }
    // country.languages is an object, push all values to array then join to string
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
    // otherwise render the country info
    // the border countries links rendering will be dependent on the result of our neighbors fetch above
    // if the neighbors array is empty or the response came back with a message property (meaning nothing found in API)
    // it will render a div with no contents, otherwise it will map over the neighbors array and make links to the neighboring coutnries
    else{
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
}

export default SingleFlagCard;
