import './SearchBar.css';

// inputs - event handler and search string from parent
// return - jsx element rendering search bar with search string
function SearchBar({changeHandler, searchDisplay}) {
    // if the search string is the default value of all then we want search bar text to ask for input
    // if the search string is something else then we want to display that

    return (
        <div className="search-bar-container">
            <div className="search-icon">
                <ion-icon name="search-outline"></ion-icon>
            </div>
            <input
                type="text"
                placeholder='Search by common or native name...'
                value={searchDisplay}
                onChange={changeHandler}
                className="search-bar"
            />
        </div>
    );
}

export default SearchBar;
