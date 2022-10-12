import './FilterSelector.css';
import {useState} from 'react';

// inputs - event handler from parent
// return - component that renders top level button, then depending on state the sub-options with the event handler
function FilterSelector({clickHandler}) {
    // have state for whether the drop down portion should be visible - starts off
    const [showDropDown, setShowDropDown] = useState(false);

    const dropDownClickHandler = () => {
        setShowDropDown((prev) => !prev);
    }

    return (
        <div className='filter-selector-container'>
            <button onClick={dropDownClickHandler} className="region-selector">
                Fliter by region
                <ion-icon name="chevron-down-outline"></ion-icon>
            </button>
            {!showDropDown ? null :
                <div className='drop-down-menu'>
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
