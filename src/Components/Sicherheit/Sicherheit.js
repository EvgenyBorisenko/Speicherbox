import React from 'react';
import s from './Sicherheit.module.css';
import DatensicherheitImg from '../../img/Datensicherheit, Tresor_smal.jpg';
import Datenschutz from '../Datenschutz/Datenschutz';

const Sicherheit = () => {
  return (
    <div className={s.Wrapper}>
      <h1 className={s.Tittle}>
        End-zu-End Verschlüsselung mit AES256 – der einzig sichere Weg für Ihre
        Daten
      </h1>
      <div className={s.SicherheitContent}>
        <div className={s.ImgWrapper}>
          <img src={DatensicherheitImg} alt="Tresor_smal-img" />
        </div>
        <div className={s.SicherheitTextBox}>
          <p className={s.SicherheitText}>
            Entgegen dem heutigen Trend im Onlinespeichermarkt stehen alle
            unsere Server in Schweizer Hochsicherheitsrechenzentren. Das heisst
            für Sie, dass Ihre Daten niemals in ausländischen Rechenzentren
            gespeichert werden und somit immer dem Schweizer Datenschutz und
            Gerichtsstand unterstellt sind.
          </p>
          <p className={s.SicherheitText}>
            Gerne teilen wir unser Rundum- Sorglos- Paket für die externe
            Datenspeicherung mit Ihnen. Wir sind nicht nur ein Unternehmen mit
            Sitz im schweizerischen Zofingen; unsere ganzen Geschäftsprozesse
            werden in der Schweiz abgebildet, so befindet sich
            selbstverständlich auch das Rechenzentrum in der Schweiz. Sie dürfen
            sicher sein, dass nur höchste Sicherheitsstandards gelten.
          </p>
          <p className={s.SicherheitText}>
            Die Verschlüsselung sowie die Entschlüsselung finden auf dem Client
            statt. Somit kann keine unberechtigte Person auf Ihre gespeicherten
            Daten zugreifen.
          </p>
        </div>
      </div>
      <p className={s.SicherheitText}>
        Wir setzen auf die AES256 Verschlüsselung. Was ist das?, AES ist der
        Verschlüsselungsstandard, und 256 bedeutet, dass die Schlüssellänge 256
        Bit beträgt. Sie können sich das so vorstellen: mit der Schlüssellänge
        von 256 Bit übersteigt die Anzahl der möglichen Kombinationen von
        Schlüsseln die Anzahl der Sterne im Universum (es gibt geschätzt etwa
        eine Quadrillion, also 10²⁴, Sterne). Das bedeutet, dass eine Milliarde
        Computer mehrere Milliarden Jahre benötigen würden um diesen Code zu
        knacken.
      </p>
      <p className={s.SicherheitText}>
        Die Datencenter verfügen über 24/7 Security vor Ort und sind durch
        Biometrie gesichert.
      </p>
      <p className={s.SicherheitText}>
        Wir nutzen keine OpenSource Technologien. So ist unsere
        selbstentwickelte Software zu 100% unser Eigentum und wird
        ausschliesslich durch SpeicherBox.ch verwendet und weiterentwickelt.
      </p>
      <Datenschutz />
    </div>
  );
};

export default Sicherheit;
