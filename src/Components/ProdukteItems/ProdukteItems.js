import React from 'react';
import BusinessIMG from '../../img/business_small.jpg';
import FamilyIMG from '../../img/family_small.jpg';
import HomeIMG from '../../img/home_small.jpg';
import RessellerIMG from '../../img/reseller_small.jpg';
import VereinIMG from '../../img/verein_small.jpg';
import s from './ProdukteItems.module.css';
import { NavLink } from 'react-router-dom';

const ProdukteItems = () => {
  return (
    <ul className={s.Products}>
      <li className={s.ProductItem}>
        <div className={s.NavBox}>
          <img src={HomeIMG} alt="family_small" />
        </div>
        <div className={s.ItemWrapper}>
          <h2>SPEICHERBOX FÜR PRIVATANWENDER</h2>
          <hr className={s.Line} />
          <p>
            Mit SpeicherBox.ch hat das Suchen nach Unterlagen und Dokumenten ein
            Ende. Sie können auf Ihre Dateien von jedem beliebigen Smartphone,
            Tablet oder Computer aus zugreifen. Sicher & kostengünstig.
          </p>
          <p>Ab CHF 59.- pro Jahr</p>
          <NavLink className={s.Button} to="/bestellen/home">
            KAUFEN
          </NavLink>
          <NavLink className={s.Link} to="#">
            Weitere Informationen
          </NavLink>
        </div>
      </li>

      <li className={s.ProductItem}>
        <div className={s.NavBox}>
          <img src={FamilyIMG} alt="family_small" />
        </div>
        <div className={s.ItemWrapper}>
          <h2>SPEICHERBOX FÜR FAMILIEN (MULTIUSER)</h2>
          <hr className={s.Line} />
          <p>
            SpeicherBox bietet Ihnen die optimale Lösung für verschlüsselte
            Datensynchronisation und Online-Zusammenarbeit für Ihre
            Familienmitglieder. Sie können auf Ihre Dateien von jedem beliebigen
            Smartphone, Tablet oder Computer aus zugreifen. So haben Sie immer
            Zugriff auf die neusten Dokumente, Fotos, abgelegte Verträge usw.
            Sicher & kostengünstig.
          </p>
          <p>
            Ab CHF 5.50 pro Benutzer und Monat (Mindestbestellung: 3 Benutzer)
            Verlangen Sie per E-Mail oder Telefon den Familien-Rabattcode!
          </p>
          <NavLink className={s.Button} to="/bestellen/multiuser">
            KAUFEN
          </NavLink>
          <NavLink className={s.Link} to="#">
            Weitere Informationen
          </NavLink>
        </div>
      </li>

      <li className={s.ProductItem}>
        <div className={s.NavBox}>
          <img src={VereinIMG} alt="family_small" />
        </div>
        <div className={s.ItemWrapper}>
          <h2>SPEICHERBOX FÜR IHREN VEREIN/VERBAND (MULTIUSER)</h2>
          <hr className={s.Line} />
          <p>
            Sichern und verwalten Sie Ihre Vereins-/Verbandsdaten an nur einem
            Ort. So sind die Daten immer aktuell. Sie haben jederzeit von
            überall her Zugriff und können Ihren Mitgliedern individuelle
            Berechtigungen einräumen. Sicher & kostengünstig.
          </p>
          <p>
            Ab CHF 5.50 pro Benutzer und Monat (Mindestbestellung: 3 Benutzer)
            Verlangen Sie per E-Mail oder Telefon den NPO-Rabattcode!
          </p>
          <NavLink className={s.Button} to="/bestellen/multiuser">
            KAUFEN
          </NavLink>
          <NavLink className={s.Link} to="#">
            Weitere Informationen
          </NavLink>
        </div>
      </li>

      <li className={s.ProductItem}>
        <div className={s.NavBox}>
          <img src={BusinessIMG} alt="family_small" />
        </div>
        <div className={s.ItemWrapper}>
          <h2>SPEICHERBOX FÜR IHR UNTERNEHEMEN (MULTIUSER)</h2>
          <hr className={s.Line} />
          <p>
            Bewahren Sie alle vertraulichen Firmendaten an einem sicheren Ort
            auf. Weitere Vorteile: Sie haben jederzeit Zugriff und können
            Berechtigungen individuell an Mitarbeiter, Teams, Projektleiter,
            usw. erteilen. Ein sinnvoller, virtueller Arbeitsraum: gut geschützt
            und praxiserprobt. Ideal für KMU, Institutionen und Organisationen.
            Sicher & kostengünstig.
          </p>
          <p>Ab CHF 11.- pro Benutzer pro Monat</p>
          <NavLink className={s.Button} to="/bestellen/multiuser">
            KAUFEN
          </NavLink>
          <NavLink className={s.Link} to="#">
            Weitere Informationen
          </NavLink>
        </div>
      </li>

      <li className={s.ProductItem}>
        <div className={s.NavBox}>
          <img src={RessellerIMG} alt="family_small" />
        </div>
        <div className={s.ItemWrapper}>
          <h2>SPEICHERBOX RESELLER</h2>
          <hr className={s.Line} />
          <p>
            Mit SpeicherBox.ch bieten Sie Ihren Kunden einen echten Mehrwert.
            Werden Sie Reseller und verkaufen Sie Ihren Kunden die echt
            schweizerische verschlüsselte Datensynchronisation und
            Datensicherung von SpeicherBox.ch. Bei unserem Reseller Programm
            erhalten Sie eine eigene, speziell auf Ihr Unternehmen angepasste
            SpeicherBox von uns zur Verfügung gestellt. Sie erstellen und
            verwalten die Kunden selbstständig und rechnen diese direkt ab.
          </p>
          <p>Für eine individuelle Beratung kontaktieren Sie uns!</p>
          <NavLink className={s.Link} to="#">
            Zum Kontaktformular Weitere Infromationen
          </NavLink>
        </div>
      </li>
    </ul>
  );
};

export default ProdukteItems;
