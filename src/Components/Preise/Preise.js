import React from 'react';
import s from './Preise.module.css';

const Preise = () => {
  return (
    <div className={s.Wrapper}>
      <h1 className={s.Tittle}>Preisübersicht</h1>
      <p>
        Bei uns steht die Sicherheit Ihrer Daten an erster Stelle. Wir bieten
        Ihnen Cloudspeicher für Ihre individuelle Nutzung. Einfach, sicher &
        kostengünstig.
      </p>
      <p>
        Sicherheit und Schweizer Qualität bedeutet selbstverständlich, dass auch
        Ihre Daten in einem Rechenzentrum in der Schweiz gespeichert werden. So
        dürfen Sie sicher sein, dass nur höchste Sicherheitsstandards gelten.
      </p>
      <p>
        Wählen Sie die für Sie passende Lösung aus. Für eine individuelle
        Beratung kontaktieren Sie uns, wir sind gerne für Sie da.
      </p>

      <ul className={s.PreiseList}>
        {/* ---------------------1----------------------- */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>Privatanwender</h2>
            <p>ab CHF 59</p>
          </div>
          <div className={s.PriseDescription}>
            <p>pro Jahr</p>
            <p>Wichtige Unterlagen</p>
            <p>sicher speichern</p>
            <button>KAUFEN</button>
            <p>oder gratis Testen</p>
          </div>
        </li>
        {/* --------------------2------------------------ */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>Familie</h2>
            <p>ab CHF 5.50</p>
          </div>
          <div className={s.PriseDescription}>
            <p>pro Benutzer</p>
            <p>Dokumente & Fotos</p>
            <p>sicher speichern & teilen</p>
            <button>KAUFEN</button>
            <p>oder gratis Testen</p>
          </div>
        </li>
        {/* --------------------3------------------------ */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>Verein / Verband</h2>
            <p>ab CHF 5.50</p>
          </div>
          <div className={s.PriseDescription}>
            <p>pro Benutzer</p>
            <p>Daten sicher teilen</p>
            <p>& synchronisieren</p>
            <button>KAUFEN</button>
            <p>oder gratis Testen</p>
          </div>
        </li>
        {/* ---------------------4----------------------- */}
        <li className={s.PreiseItem}>
          <div className={s.ListName}>
            <h2>Unternehmen</h2>
            <p>ab CHF 11</p>
          </div>
          <div className={s.PriseDescription}>
            <p>pro Benutzer</p>
            <p>Vertrauliche Firmendaten</p>
            <p>sicher aufbewahren</p>
            <button>KAUFEN</button>
            <p>oder gratis Testen</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Preise;
