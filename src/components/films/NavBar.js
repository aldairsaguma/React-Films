import React from 'react';
import { NavLink } from 'react-router-dom';
import Dropdown  from './Dropdown';
import Toggle from './darkMode/Toggle';

export const NavBar = () => {

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
                                    src="../assets/images/films.png" 
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
