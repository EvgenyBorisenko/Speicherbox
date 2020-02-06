import React from 'react';
import s from './HomeSpeicherbox.module.css';

const HomeSpeicherbox = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.TittleBox}>
        <h1 className={s.Tittle}>SPEICHERBOX HOME KAUFEN</h1>
      </div>
      <ul className={s.PreiseList}>
        {/* ---------------------1----------------------- */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>Test</h2>
            <p>Kostenlos</p>
          </div>
          <div className={s.PriseDescription}>
            <p>30 Tage kostenlos testen</p>

            <button>KAUFEN</button>
          </div>
        </li>
        {/* --------------------2------------------------ */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>Mini</h2>
            <p>CHF 59.00 pro Jahr</p>
          </div>
          <div className={s.PriseDescription}>
            <p>100GB Speicherplatz</p>

            <button>KAUFEN</button>
          </div>
        </li>
        {/* --------------------3------------------------ */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>Standard</h2>
            <p>CHF 129.00 pro Jahr</p>
          </div>
          <div className={s.PriseDescription}>
            <p>500GB Speicherplatz</p>

            <button>KAUFEN</button>
          </div>
        </li>
        {/* ---------------------4----------------------- */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>Premium</h2>
            <p>CHF 250.00 pro Jahr</p>
          </div>
          <div className={s.PriseDescription}>
            <p>1TB Speicherplatz</p>
            <button>KAUFEN</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default HomeSpeicherbox;
