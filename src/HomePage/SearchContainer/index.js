import FilterSelector from "../FilterSelector";
import SearchBar from "../SearchBar";
import './SearchContainer.css';

function SearchContainer() {
    return (
        <div className="search-container">
            <SearchBar />
            <FilterSelector />
        </div>
    );
}

export default SearchContainer;
