import './SingleFlagCard.css';

function SingleFlagCard(){
    // ** TO DO ** logic to make this render each flag passed in - using flag placeholder for now
    const flagURL = "https://m.media-amazon.com/images/I/41TeyWaQeQL._AC_SX466_.jpg";
    const flagText = "american flag";
    const countryName = "United States of America";
    const dataPlaceholder = "placeholder";

    return (
        <div className='single-flag-card'>
            <img src={flagURL} alt={flagText} className="single-flag_image"></img>
            <div className='single-flag_info-section'>
                <h2 className='single-flag_heading'>{countryName}</h2>
                <div className='single-flag_info'>
                    <p className="single-flag_category">
                        Native Name:
                        <span className="single-flag_data">
                            {` ${dataPlaceholder}`}
                        </span>
                    </p>
                    <p className="single-flag_category">
                        Population:
                        <span className="single-flag_data">
                            {` ${dataPlaceholder}`}
                        </span>
                    </p>
                    <p className="single-flag_category">
                        Region:
                        <span className="single-flag_data">
                            {` ${dataPlaceholder}`}
                        </span>
                    </p>
                    <p className="single-flag_category">
                        Sub Region:
                        <span className="single-flag_data">
                            {` ${dataPlaceholder}`}
                        </span>
                    </p>
                    <p className="single-flag_category">
                        Capital:
                        <span className="single-flag_data">
                            {` ${dataPlaceholder}`}
                        </span>
                    </p>
                    <p className="single-flag_category">
                        Top Level Domain:
                        <span className="single-flag_data">
                            {` ${dataPlaceholder}`}
                        </span>
                    </p>
                    <p className="single-flag_category">
                        Currencies:
                        <span className="single-flag_data">
                            {` ${dataPlaceholder}`}
                        </span>
                    </p>
                    <p className="single-flag_category">
                        Languages:
                        <span className="single-flag_data">
                            {` ${dataPlaceholder}`}
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
