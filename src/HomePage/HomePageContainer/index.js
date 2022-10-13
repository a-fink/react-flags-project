import './HomePageContainer.css';
import SearchBar from '../SearchBar';
import FilterSelector from '../FilterSelector';
import AllFlagsContainer from '../AllFlagsContainer';
import { useState } from 'react';

// inputs - variable for which color mode page is in to pass on to child elements
// outputs - component that renders all the home page elements
function HomePageContainer({lightMode}){
    // useState to set a search string, starts out as 'all', and a search display value for the search bar, starts as ''
    // search string will get updated by search bar or filter selector
    // then passed to all flags container to search / render the results
    const [searchString, setSearchString] = useState('all');
    const [searchDisplay, setSearchDisplay] = useState('');

    // click handler that will be passed to the filter selector which renders the drop down menu
    // the correct search string we need is stored as the id of each item in the drop down menu
    // when clicking an item in the dropdown menu it will update our search string
    // this will in turn re-render the all flags container with the new search
    const clickHandler = (event) => {
        setSearchString(event.target.id);
    }

    // change handler that will be passed to the search bar
    // when the value of the search bar changes we want to update the search string
    // this will update what displays in the search bar and re-render the all flags container with the new search
    const changeHandler = (event) => {

        // set the search display to the new value of the search bar
        setSearchDisplay(event.target.value);

        // if the search bar's value has gone back to '' we want to search for all
        if(event.target.value === ''){
            setSearchString('all');
        }
        // otherwise set search string to the correct string to look for a country by name
        else{
            setSearchString(`name/${event.target.value}`);
        }
    }


    return (
        <div className="home-page-container">
            <div className="search-container">
                <SearchBar searchDisplay={searchDisplay} changeHandler={changeHandler} lightMode={lightMode}/>
                <FilterSelector clickHandler={clickHandler} lightMode={lightMode}/>
            </div>
            <AllFlagsContainer searchString={searchString} lightMode={lightMode}/>
        </div>
    );
}

export default HomePageContainer;
