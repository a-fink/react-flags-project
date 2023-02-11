import './HomePageContainer.css';
import SearchBar from '../SearchBar';
import FilterSelector from '../FilterSelector';
import AllFlagsContainer from '../AllFlagsContainer';
import { useState } from 'react';

// inputs - variable for which color mode page is in to pass on to child elements
// outputs - component that renders all the home page elements
function HomePageContainer({lightMode}){
    // searchString controls search parameter sent to API, searchDisplay controls form inputs from user
    const [searchString, setSearchString] = useState('all');
    const [searchDisplay, setSearchDisplay] = useState('');

    // click handler to be passed to filter drop down menu
    const clickHandler = (event) => {
        setSearchString(event.target.id);
    }

    // change handler to be passed to search bar - set input text and API search value
    const changeHandler = (event) => {
        setSearchDisplay(event.target.value);

        if(event.target.value === ''){
            setSearchString('all');
        }

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
