import './FilterSelector.css';
import {useState} from 'react';

// inputs - event handler from parent, variable for which color mode page is in
// return - component that renders top level button, then depending on state the sub-options with the event handler
function FilterSelector({filterClickHandler, lightMode}) {
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
                    <button className='drop-down-button' onClick={filterClickHandler} id='all'>All</button>
                    <button className='drop-down-button' onClick={filterClickHandler} id='Africa'>Africa</button>
                    <button className='drop-down-button' onClick={filterClickHandler} id='Americas'>Americas</button>
                    <button className='drop-down-button' onClick={filterClickHandler} id='Asia'>Asia</button>
                    <button className='drop-down-button' onClick={filterClickHandler} id='Europe'>Europe</button>
                    <button className='drop-down-button' onClick={filterClickHandler} id='Oceania'>Oceania</button>
                </div>
            }
        </div>
    )
}

export default FilterSelector;
