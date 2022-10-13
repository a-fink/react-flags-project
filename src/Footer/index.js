import './Footer.css'

// inputs: variable for which color mode page is in
// returns: jsx component for the footer bar
function Footer({lightMode}) {
    // set color mode variable based on lightMode
    const modeClass = (lightMode ? 'light-element' : 'dark-element');
    const borderClass = (lightMode ? 'border-left-light' : 'border-left-dark');
    const borderSmallClass = (lightMode ? 'border-right-light' : 'border-right-dark');

    return (
        <footer className={modeClass}>
            <div className='personal-links-div'>
                <div className='personal-info'>
                    <p className='hide-when-small'>Project created by</p>
                    <p className='personal-info-name'>Aubrey Finkelstein</p>
                </div>
                <ul className='personal-links-list'>
                    <li className={borderClass}>
                        <a href='https://www.linkedin.com/in/aubreyfinkelstein' className='personal-link' target="_blank" rel="noreferrer">LinkedIn</a>
                    </li>
                    <li className={`${borderClass} ${borderSmallClass}`}>
                        <a href='https://github.com/a-fink' className='personal-link' target="_blank" rel="noreferrer">GitHub</a>
                    </li>
                </ul>
            </div>
            <div className='api-div'>
                <div className='api-info'>
                    <p className='hide-when-small'>Information and images pulled from the</p>
                    <a href='https://restcountries.com' className='personal-link api-link' target="_blank" rel="noreferrer">
                        REST Countries API.
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
