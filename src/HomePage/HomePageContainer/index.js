import './HomePageContainer.css';
import SearchContainer from '../SearchContainer';
import AllFlagsContainer from '../AllFlagsContainer';

function HomePageContainer(){
    return (
        <div className="home-page-container">
            <SearchContainer />
            <AllFlagsContainer />
        </div>
    );
}

export default HomePageContainer;
