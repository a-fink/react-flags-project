import './HomePageContainer.css';
import SearchBar from '../SearchBar';
import FilterSelector from '../FilterSelector';
import AllFlagsContainer from '../AllFlagsContainer';

function HomePageContainer(){
    return (
        <div className="home-page-container">
            <div className="search-container">
                <SearchBar />
                <FilterSelector />
            </div>
            <AllFlagsContainer />
        </div>
    );
}

export default HomePageContainer;
