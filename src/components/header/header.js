// Image File Imports
import BrainFlixLogo from 'assets/logo/BrainFlix-logo.svg';
import ProfileThumbnail from 'assets/images/Mohan-muruge.jpg';
// Component Imports
import SearchBar from 'components/searchbar/searchBar';
import UploadButton from 'components/buttons/upload-button/uploadButton';
// Stylesheet Import
import './header.css';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src={BrainFlixLogo} alt="BrainFlix logo"/>
            <div className="header__mobile-bp">
                <SearchBar />
                 <img className="header__profile" src={ProfileThumbnail} alt="Profile thumbnail" />
                 <UploadButton />
            </div>
        </div>
    );
};

// Exports
export default Header;