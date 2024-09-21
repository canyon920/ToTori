import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles.css'

const Navigation: React.FC = () => {
    return (
        <nav className='header-menu'>
            <ul>
                <li>
                    <Link to="/">회사소개</Link>
                </li>
                <li>
                    <Link to="/about">공지사항</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;