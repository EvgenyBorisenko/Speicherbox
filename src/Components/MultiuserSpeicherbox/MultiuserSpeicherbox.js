import React from 'react';
import s from './MultiuserSpeicherbox.module.css';

const MultiuserSpeicherbox = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.TittleBox}>
        <h1 className={s.Tittle}>SPEICHERBOX MULTIUSER BESTELLEN</h1>
      </div>
      <ul className={s.PreiseList}>
        {/* ---------------------1----------------------- */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>
              Multiuser
              <br />
              Test
            </h2>
            <p>Kostenlos</p>
          </div>
          <div className={s.PriseDescription}>
            <p>für 30 Tage testen</p>
            <p>500GB Speicherplatz</p>
            <p>5 Benutzer</p>
            <button>KAUFEN</button>
          </div>
        </li>
        {/* --------------------2------------------------ */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>
              Multiuser
              <br />
              Standard
            </h2>
            <p>CHF 11.-</p>
          </div>
          <div className={s.PriseDescription}>
            <p>pro Benutzer/Monat</p>
            <p>500GB Speicherplatz</p>
            <p>pro Benutzer</p>
            <button>KAUFEN</button>
          </div>
        </li>
        {/* --------------------3------------------------ */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>
              Multiuser
              <br />
              Premium
            </h2>
            <p>CHF 14.-</p>
          </div>
          <div className={s.PriseDescription}>
            <p>pro Benutzer/Monat</p>
            <p>1TB Speicherplatz</p>
            <p>pro Benutzer</p>
            <button>KAUFEN</button>
          </div>
        </li>
        {/* ---------------------4----------------------- */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>
              Familien
              <br />
              Verein / NPO
            </h2>
            <p>auf Anfrage</p>
          </div>
          <div className={s.PriseDescription}>
            <p>für Non-Profit Organisationen</p>
            <p>500GB Speicherplatz</p>
            <p>pro Benutzer</p>
            <button>KAUFEN</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MultiuserSpeicherbox;
