import React from 'react';
import logo from '../../img/logo_Wuerfel_speicherbox_1_klein.png';
import s from './Footer.module.css';
import { NavLink } from 'react-router-dom';
const Footer = () => {
  return (
    <div className={s.Footer}>
      <div className={s.Wrapper}>
        <div className="info">
          <h2>SpeicherBox.ch</h2>
          <p className={s.TextInfo}>
            Speicherbox.ch ist ein virtueller Arbeitsraum zum Speichern,
            Bearbeiten und Teilen von vertraulichen Dokumenten. Sicher wie ein
            Schweizer Banktresor, denn Ihre Daten bleiben in der Schweiz.{' '}
          </p>
        </div>

        <div className={s.Logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={s.Links}>
          <h2>Links</h2>
          <NavLink className={s.Link} to="#">
            Datenzugriff
          </NavLink>
          <NavLink className={s.Link} to="#">
            Admin Konsole
          </NavLink>
          <NavLink className={s.Link} to="#">
            Kundencenter
          </NavLink>
          <NavLink className={s.Link} to="#">
            "Allgemeine Geschäftsbedingungen"
          </NavLink>
        </div>
        <div className={s.Kontakt}>
          <h2>Kontakt</h2>
          <p>+41 62 534 20 01</p>
          <p>
            Kirchplatz 8
            <br />
            4800 Zofingen
          </p>
          <p>icon-opening-container</p>
          <p>www.speicherbox.ch</p>
        </div>
      </div>
      <p className={s.FooterRights}>
        2015 All rights reserved, Powered by Snappytheme
      </p>
    </div>
  );
};

export default Footer;
