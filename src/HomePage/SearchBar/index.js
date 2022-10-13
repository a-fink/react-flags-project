import './SearchBar.css';

// inputs - event handler, search string, and variable for which color mode page is in
// return - jsx element rendering search bar with search string
function SearchBar({changeHandler, searchDisplay, lightMode}) {
    // set class name variable based on lightMode
    const modeClass = (lightMode ? 'light-element' : 'dark-element');
    const colorClass = (lightMode ? 'gray-text' : 'white-text');

    return (
        <div className={`search-bar-container ${modeClass} ${colorClass}`}>
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
