function SearchBar() {
    return (
        <div className="search-bar-container">
            <ion-icon name="search-outline" className="search-icon"></ion-icon>
            <input type="text" value="Search for a country..." className="search-bar"></input>
        </div>
    );
}

export default SearchBar;
