import './HomePageContainer.css';
import SearchBar from '../SearchBar';
import FilterSelector from '../FilterSelector';
import AllFlagsContainer from '../AllFlagsContainer';
import { useState } from 'react';

// inputs - variable for which color mode page is in to pass on to child elements
// outputs - component that renders all the home page elements
function HomePageContainer({lightMode}){
    // for now searching and filtering will be independent operations - using one will clear the other
    const [searchString, setSearchString] = useState('');
    const [filterString, setFilterString] = useState('');

    const filterClickHandler = (event) => {
        setFilterString(event.target.id === 'all' ? '' : event.target.id);
        setSearchString('');
    }

    const searchChangeHandler = (event) => {
        setSearchString(event.target.value);
        setFilterString('');
    }

    return (
        <div className="home-page-container">
            <div className="search-container">
                <SearchBar searchString={searchString} searchChangeHandler={searchChangeHandler} lightMode={lightMode}/>
                <FilterSelector filterClickHandler={filterClickHandler} lightMode={lightMode}/>
            </div>
            <AllFlagsContainer searchString={searchString} filterString={filterString} lightMode={lightMode}/>
        </div>
    );
}

export default HomePageContainer;
