import './SmallFlagContainer.css'

function OneFlagContainer(){
    // ** TO DO ** logic to make this render each flag passed in - using flag placeholder for now
    const flagURL = "https://m.media-amazon.com/images/I/41TeyWaQeQL._AC_SX466_.jpg";
    const flagText = "american flag";
    const countryName = "United States of America";
    const dataPlaceholder = "placeholder";

    return (
        <div className="country-card-outer">
            <img src={flagURL} alt={flagText} className="country-card_image" />
            <div className="country-card_info">
                <h4 className="country-card_heading">{countryName}</h4>
                <p className="country-card_category">
                    Population:
                    <span className="country-card_data">
                        {dataPlaceholder}
                    </span>
                </p>
                <p className="country-card_category">
                    Region:
                    <span className="country-card_data">
                        {dataPlaceholder}
                    </span>
                </p>
                <p className="country-card_category">
                    Capital:
                    <span className="country-card_data">
                        {dataPlaceholder}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default OneFlagContainer;
