import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
    const linkTextColor = props.mode === 'dark' ? 'text-light' : 'text-dark';

    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
            <div className="container-fluid">
                <a className={`navbar-brand ${linkTextColor}`} href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className={`nav-link active ${linkTextColor}`} aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={`nav-link ${linkTextColor}`} href="/">About</a>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label ${linkTextColor}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.string.isRequired,
    toggleMode: PropTypes.func.isRequired
};

export default Navbar;
