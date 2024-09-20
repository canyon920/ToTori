import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles.css'

const Navigation: React.FC = () => {
    return (
        <nav className='header-menu'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;