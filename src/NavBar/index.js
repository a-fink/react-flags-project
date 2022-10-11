import './NavBar.css';
import SearchBar from '../SearchBar';
import ModeButton from '../ModeButton';

function NavBar(){
    return (
        <nav>
            <SearchBar />
            <ModeButton />
        </nav>
    );
}

export default NavBar;
