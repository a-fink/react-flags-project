import './HomePageContainer.css';
import SearchBar from '../SearchBar';
import FilterSelector from '../FilterSelector';
import AllFlagsContainer from '../AllFlagsContainer';
import { useState } from 'react';

// inputs - none
// outputs - component that renders all the home page elements
function HomePageContainer(){
    // useState to set a search string, starts out as 'all'
    // search string will get updated by search bar or filter selector
    // then passed to all flags container to search / render the results
    const [searchString, setSearchString] = useState('all');

    // click handler that will be passed to the filter selector which renders the drop down menu
    // the correct search string we need is stored as the id of each item in the drop down menu
    // when clicking an item in the dropdown menu it will update our search string
    // this will in turn re-render the all flags container with the new search
    const clickHandler = (event) => {
        setSearchString(event.target.id);
    }

    return (
        <div className="home-page-container">
            <div className="search-container">
                <SearchBar />
                <FilterSelector clickHandler={clickHandler}/>
            </div>
            <AllFlagsContainer searchString={searchString}/>
        </div>
    );
}

export default HomePageContainer;
