import { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import './SingleFlagCard.css';

// input - a country found from the API by the parent component
// output - a JSX element rendering the country flag and information
function SingleFlagCard({country}){
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

    // get a string of the currencies from the country object
    let currencyArray = [];
    for (const [key, value] of Object.entries(country.currencies)){
        currencyArray.push(value.name);
    }
    const currencies = currencyArray.join(', ');

    // get a string of the languages from the country object
    let languagesArray = [];
    for(const [key, value] of Object.entries(country.languages)){
        languagesArray.push(value);
    }
    const languages = languagesArray.join(', ');

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
                            Population:
                            <span className="single-flag_data">
                                {` ${country.population.toLocaleString('en-US')}`}
                            </span>
                        </p>
                        <p className="single-flag_category">
                            Region:
                            <span className="single-flag_data">
                                {` ${country.region}`}
                            </span>
                        </p>
                        <p className="single-flag_category">
                            Sub Region:
                            <span className="single-flag_data">
                                {` ${country.subregion}`}
                            </span>
                        </p>
                        <p className="single-flag_category">
                            Capital:
                            <span className="single-flag_data">
                                {` ${country.capital}`}
                            </span>
                        </p>
                        <p className="single-flag_category">
                            Top Level Domain:
                            <span className="single-flag_data">
                                {` ${country.tld}`}
                            </span>
                        </p>
                        <p className="single-flag_category">
                            Currencies:
                            <span className="single-flag_data">
                                {` ${currencies}`}
                            </span>
                        </p>
                        <p className="single-flag_category">
                            Languages:
                            <span className="single-flag_data">
                                {` ${languages}`}
                            </span>
                        </p>
                    </div>
                    <div className='single-flag_neighbors'>
                        <p className="single-flag_category">Border Countries: </p>
                        <div className='neighbors-container'>
                            {(neighbors.length === 0 || neighbors.message) ? null :
                            neighbors.map((el) => {
                                return (
                                    <Link to={`/countries/${el.cca3}`} key={`${country.cca3}-neighbor-${el.cca3}`}>
                                        <div className='neighbors-link'>
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
