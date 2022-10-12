import './SingleFlagCard.css';

// input - a country found from the API by the parent component
// output - a JSX element rendering the country flag and information
function SingleFlagCard({country}){
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

    return (
        <div className='single-flag-card'>
            <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="single-flag_image"></img>
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
                <div className='single-flag_neighbours'>
                    <p className="single-flag_category">Border Countries: </p>
                    {/* TODO BUILD BORDER LINK ELEMENTS HERE */}
                </div>
            </div>
        </div>
    );
}

export default SingleFlagCard;
