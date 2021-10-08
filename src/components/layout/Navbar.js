import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Navbar = ({icon, title}) => {
    return (
        <nav className='bg-pink-400 p-3 text-white flex flex-row mb-2'>
            <FontAwesomeIcon size='2x' color='white' icon={icon} className='mr-1'/>
            <h1 className='text-3xl font-bold'>
                {title}
            </h1>
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'Github finder',
    icon: faGithub
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar;