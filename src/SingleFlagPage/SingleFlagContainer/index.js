import BackButton from "../../BackButton";
import SingleFlagCard from "../SingleFlagCard";
import './SingleFlagContainer.css';

function SingleFlagContainer() {
    return (
        <div className="single-flag-container">
            <div className="back-button-positioner">
                <BackButton />
            </div>
            <SingleFlagCard />
        </div>
    );
}

export default SingleFlagContainer;
