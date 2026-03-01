import "./HeaderNavigation.scss";
import { Link } from "react-router-dom";

const HeaderNavigation = ({ }) => {
    return (
        <div className="header-navigation">
            <Link to="" className="header-navigation__link">Analytics</Link>;
            <Link to="" className="header-navigation__link">Teams</Link>;
            <Link to="" className="header-navigation__link">Previous AI Prompts</Link>;
        </div>
    );
}
export default HeaderNavigation;