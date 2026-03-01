import './TopNavbar.scss';
import avatar from '../../assets/images/avatar.png';
import magnifier from "../../assets/icons/magnifier.png";
import uberEatsLogo from "../../assets/images/Uber-Eats-Logo.png";
import chevron from "../../assets/icons/chevron-down.png";

const TopNavbar = () => {
    return (
        <nav className="top-navbar">
            {/* Brand Selector */}
            <div className="top-navbar__brand-selector">
                <img src={uberEatsLogo} alt="Uber Eats Logo" className="top-navbar__brand-name" />
                <img src={chevron} alt="Down chevron icon" className="top-navbar__dropdown-icon" />
            </div>

            {/* Search Input */}
            <div className="top-navbar__search-container">
                <input
                    type="text"
                    placeholder="Search a campaign here"
                    className="top-navbar__search-input"
                />
                <img src={magnifier} alt="Magnifier search icon" className="top-navbar__search-icon" />
            </div>

            {/* User Profile */}
            <div className="top-navbar__user-profile">
                <img src={avatar} alt="Alex Chen avatar" className="top-navbar__avatar" />
                <div className="top-navbar__user-info">
                    <span className="top-navbar__user-name">ALEX CHEN</span>
                    <span className="top-navbar__user-role">Vice President of Marketing</span>
                </div>
            </div>
        </nav>
    );
};

export default TopNavbar;