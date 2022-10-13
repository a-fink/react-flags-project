import './SmallFlagContainer.css'
import {Link} from 'react-router-dom';

// inputs - props from parent including name, population, region, capital, flag url, country code, and which color mode page is in
// return - jsx element that displays information & links to info page for single country
// toLocaleString used below to add commas to the population numbers
function OneFlagContainer({name, population, region, capital, flag, code, lightMode}){
    // set color mode variables based on lightMode
    const modeClass = (lightMode ? 'light-element' : 'dark-element');
    const hoverClass = (lightMode ? 'light-hover' : 'dark-hover');

    return (
        <Link to={`/countries/${code}`}>
            <div className={`country-card-outer ${modeClass} ${hoverClass}`}>
                <img src={flag} alt={`Flag of ${name}`} className="country-card_image" />
                <div className="country-card_info">
                    <h4 className="country-card_heading">{name}</h4>
                    <p className="country-card_category">
                        Population:
                        <span className="country-card_data">
                            {` ${population.toLocaleString('en-US')}`}
                        </span>
                    </p>
                    <p className="country-card_category">
                        Region:
                        <span className="country-card_data">
                            {` ${region}`}
                        </span>
                    </p>
                    <p className="country-card_category">
                        Capital:
                        <span className="country-card_data">
                            {` ${capital}`}
                        </span>
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default OneFlagContainer;
