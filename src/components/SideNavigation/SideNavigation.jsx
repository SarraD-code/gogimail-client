import './SideNavigation.scss';
import { NavLink, useLocation } from 'react-router-dom';
import Bell from "../../assets/icons/bell.svg?react";
import Envelope from "../../assets/icons/envelope.svg?react";
import Hand from "../../assets/icons/hand.svg?react";
import HappyFace from "../../assets/icons/happy-face.svg?react";
import Pen from "../../assets/icons/pen.svg?react";
import Person from "../../assets/icons/person.svg?react";
import Settings from "../../assets/icons/settings.svg?react";
import ThreeDots from "../../assets/icons/three-dots.svg?react";
import ThreePerson from "../../assets/icons/three-person.svg?react";

const SideNavigation = ({ }) => {
    const navItems = [
        { name: 'Write Prompt', path: '/generate', icon: Pen, count: 12 },
        { name: 'Campaigns', path: '/campaigns', icon: Envelope },
        { name: 'Analytics', path: '/analytics', icon: ThreeDots },
        { name: 'Notification', path: '/notifications', icon: Bell },
        { name: 'Teams', path: '/teams', icon: ThreePerson, section: 'People' },
        { name: 'Role', path: '/roles', icon: Person },
        { name: 'Subscribers', path: '/subscribers', icon: HappyFace },
        { name: 'Settings', path: '/settings', icon: Settings, section: 'Privacy' },
        { name: 'Help', path: '/help', icon: Hand },
    ];
    let IconSvg = null;
    const { pathname } = useLocation();
    const generatePaths = ['/generate', '/generated-emails', '/review'];
    const isGeneratePathAtive = () => generatePaths.some(path => pathname.startsWith(path));

    return (
        <div className="side-navigation">
            <div>
                {navItems[0].section && <div className="side-navigation__section-header">{navItems[0].section}</div>}
                {IconSvg = navItems[0].icon}
                <NavLink
                    to={navItems[0].path}
                    className={({ isActive }) => `side-navigation__nav-item ${isActive || isGeneratePathAtive() ? 'highlight' : ''}`}
                >
                    <IconSvg className="side-navigation__icon" />
                    <span className="side-navigation__name">{navItems[0].name}</span>
                    {navItems[0].count && <span className="side-navigation__count">{navItems[0].count}</span>}
                </NavLink>
            </div>
            {navItems.map((item, index) => (
                index > 0 ?
                    <div key={index}>
                        {item.section && <div className="side-navigation__section-header">{item.section}</div>}
                        {IconSvg = item.icon}
                        <NavLink
                            to={item.path}
                            className={({ isActive }) => `side-navigation__nav-item ${isActive ? 'highlight' : ''}`}
                        >
                            <IconSvg className="side-navigation__icon" />
                            <span className="side-navigation__name">{item.name}</span>
                            {item.count && <span className="side-navigation__count">{item.count}</span>}
                        </NavLink>
                    </div>
                    : ""
            ))}
        </div>
    );
};

export default SideNavigation;