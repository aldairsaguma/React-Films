import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown  from '../login/Dropdown';
import Toggle from './darkMode/Toggle';
import { userContext } from './userContext';

export const NavBar = () => {
    const {userState} = useContext(userContext);
    const {darkMode} = userState;
    return (
        <header className="films__header">
            <div className="films__header-sub">
                <div className="films__sub-container">
                        <div className="films__logo">
                            <NavLink 
                                exact 
                                to="/"
                                className=""
                                > 
                                <img 
                                    tabIndex={2}
                                    src={`${process.env.PUBLIC_URL}/assets/images/logo/${ !darkMode ? 'logo-light' : 'logo-dark'}.png`}
                                    //src="../assets/images/films.png" 
                                    alt="PelisES" 
                                    title="PelisES" />
                            </NavLink>
                            
                        </div>
                        <div className="films_categories">
                            <nav>
                                <div className="films_search-films">
                                    <form className="films__form-search">
                                        <input
                                            tabIndex={1}  
                                            type="text"
                                            placeholder="Buscar..."
                                        />
                                    </form>
                                </div>
                                <ul className="films__ul-header">
                                    <li>
                                        <NavLink 
                                            exact
                                            to="/premiere"
                                            className=""
                                            title="Estrenos"
                                            >
                                            Estrenos
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            exact
                                            to="/categories"
                                            className=""
                                            title="Categorías"
                                            >
                                            Categorías
                                        </NavLink>
                                    </li>
                                    <Dropdown />
                                    <li>
                                        <Toggle />
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
            </div>
        </header>
    )
}
