import React from 'react';
import s from './Produkte.module.css';
import ProdukteItems from '../ProdukteItems/ProdukteItems';
import ProduktUbersicht from '../ProduktUbersicht/ProduktUbersicht';

const Produkte = () => {
  return (
    <div className={s.Wrapper}>
      <h1 className={s.Tittle}>PRODUKTE</h1>
      <div className={s.ProductText}>
        <p>
          Wir bieten Ihnen Cloudspeicher für Ihre individuelle Nutzung. Einfach,
          sicher & kostengünstig. Bei uns steht die Sicherheit Ihrer Daten an
          erster Stelle.
        </p>
        <p>
          Ist Ihnen Sicherheit und Schweizer Qualität wichtig? Dann sind Sie bei
          uns genau richtig. SpeicherBox.ch bietet Ihnen eine kostengünstige
          Datensynchronisation und Datenspeicherung mit unserem Rechenzentrum in
          der Schweiz, verbunden mit der Serviceleistung eines persönlichen
          Ticket- und Telefonsupports.
        </p>
        <p>
          Schützen Sie mit unserer Hilfe Ihre Dateien von Ihrem Computer bis zum
          Empfänger und behalten Sie die volle Kontrolle über Ihre Dateien. Mit
          Ende-zu-Ende-Verschlüsselung verlässt nichts Ihre Geräte
          unverschlüsselt. Nur Sie haben den Code, um den Inhalt Ihrer Dateien
          zu entschlüsseln. Wählen Sie die für Sie passende Lösung aus. Für eine
          individuelle Beratung kontaktieren Sie uns, wir sind gerne für Sie da.
        </p>
        <p>
          SpeicherBox.ch garantiert Ihnen 100 % Privatsphäre durch
          End-zu-Endverschlüsselung und externe Datensicherung ausschliesslich
          in der Schweiz!
        </p>
      </div>
      <ProdukteItems />
      <ProduktUbersicht />
    </div>
  );
};

export default Produkte;
