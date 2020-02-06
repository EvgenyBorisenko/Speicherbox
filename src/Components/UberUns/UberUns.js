import React from 'react';
import s from './UberUns.module.css';
import SwissmadeImg from '../../img/swissmade.png';

const UberUns = () => {
  return (
    <div className={s.Wrapper}>
      <h1 className={s.Tittle}>
        SpeicherBox.ch: Der sichere Cloud-Speicher aus der Schweiz
      </h1>
      <div className={s.ProductText}>
        <p>
          Wir konnten nicht länger ruhigen Gewissens akzeptieren, dass unsere
          Daten noch länger bei ausländischen, anonymen Onlinespeicherdiensten
          gespeichert sind. Auf der Suche nach einer vertrauenswürdigen
          Alternative wurde uns schnell bewusst, dass es das so auf dem Markt
          noch gar nicht gibt, und so riefen wir unser eigenes Projekt ins
          Leben: SpeicherBox.ch
        </p>
        <p>
          Gerne teilen wir unser Rundum- Sorglos- Paket für die externe
          Datenspeicherung mit Ihnen. Wir sind nicht nur ein Unternehmen mit
          Sitz im schweizerischen Zofingen; unsere ganzen Geschäftsprozesse
          werden in der Schweiz abgebildet, so befindet sich selbstverständlich
          auch das Rechenzentrum in der Schweiz. Sie dürfen sicher sein, dass
          nur höchste Sicherheitsstandards gelten.
        </p>
        <p>
          Datensicherheit aus der Schweiz, für die Schweiz und alle, die
          Schweizer Qualität zu schätzen wissen.
        </p>
        <p>
          Bei SpeicherBox.ch stehen die Vertrauenswürdigkeit, Verfügbarkeit und
          Datensicherheit Ihrer Daten an oberster Stelle.
        </p>
        <p>
          SpeicherBox.ch garantiert Ihnen 100 % Privatsphäre durch
          End-zu-Endverschlüsselung und externe Datensicherung ausschliesslich
          in der Schweiz!
        </p>
      </div>
      <div className={s.ImgBox}>
        <img src={SwissmadeImg} alt="swissmade-img" />
      </div>
    </div>
  );
};

export default UberUns;
