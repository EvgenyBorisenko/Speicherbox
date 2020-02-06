import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import logo from '../../img/logo_Wuerfel_speicherbox_1_klein.png';

const Header = () => {
  return (
    <header className={s.Header}>
      <div className={s.Wrapper}>
        <div className={s.Logo}>
          <NavLink to="/" name="Главная">
            <img src={logo} alt="Jumbo_grill_logo" />
          </NavLink>
        </div>
        <div className={s.MainNavigation}>
          <nav className={s.Navigation}>
            <NavLink className={s.Link} to="/">
              HOME
            </NavLink>

            <NavLink className={s.Link} to="/produkte">
              PRODUKTE
            </NavLink>

            <NavLink className={s.Link} to="/preise">
              PREISE
            </NavLink>

            <NavLink className={s.Link} to="/uberuns">
              ÜBER UNS
            </NavLink>

            <NavLink className={s.Link} to="/sicherheit">
              SICHERHEIT
            </NavLink>

            <NavLink className={s.Link} to="/support">
              SUPPORT
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
