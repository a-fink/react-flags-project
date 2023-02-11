import './FilterSelector.css';
import {useState} from 'react';

// inputs - event handler from parent, variable for which color mode page is in
// return - component that renders top level button, then depending on state the sub-options with the event handler
function FilterSelector({clickHandler, lightMode}) {
    const modeClass = (lightMode ? 'light-element' : 'dark-element');

    // state for whether the drop down portion should be visible - starts off
    const [showDropDown, setShowDropDown] = useState(false);

    const dropDownClickHandler = () => {
        setShowDropDown((prev) => !prev);
    }

    return (
        <div className={`filter-selector-container ${modeClass}`}>
            <button onClick={dropDownClickHandler} className="region-selector">
                Filter by region
                <ion-icon name="chevron-down-outline"></ion-icon>
            </button>
            {!showDropDown ? null :
                <div className={`drop-down-menu ${modeClass}`}>
                    <button className='drop-down-button' onClick={clickHandler} id='all'>All</button>
                    <button className='drop-down-button' onClick={clickHandler} id='region/africa'>Africa</button>
                    <button className='drop-down-button' onClick={clickHandler} id='region/americas'>Americas</button>
                    <button className='drop-down-button' onClick={clickHandler} id='region/asia'>Asia</button>
                    <button className='drop-down-button' onClick={clickHandler} id='region/europe'>Europe</button>
                    <button className='drop-down-button' onClick={clickHandler} id='region/oceania'>Oceania</button>
                </div>
            }
        </div>
    )
}

export default FilterSelector;
