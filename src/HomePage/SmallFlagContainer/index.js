import './SmallFlagContainer.css'
import {Link} from 'react-router-dom';

function OneFlagContainer({name, population, region, capital, flag, code}){
    // ** TO DO ** logic to make this render each flag passed in - using flag placeholder for now

    return (
        <Link to={`/countries/${code}`}>
            <div className="country-card-outer">
                <img src={flag} alt={`Flag of ${name}`} className="country-card_image" />
                <div className="country-card_info">
                    <h4 className="country-card_heading">{name}</h4>
                    <p className="country-card_category">
                        Population:
                        <span className="country-card_data">
                            {` ${population}`}
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
