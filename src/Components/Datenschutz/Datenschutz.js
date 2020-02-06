import React from 'react';
import s from './Datenschutz.module.css';

const Datenschutz = () => {
  return (
    <div className={s.Wrapper}>
      <h1 className={s.Tittle}>Datenschutz</h1>
      <ul className={s.DatenschutzList}>
        <li className={s.DatenschutzItem}>
          Schweizer Behörden, Gerichte, Gemeinden. Ämter, etc. sind an das
          Schweizer Datenschutzgesetz (Bundesgesetz über den Datenschutz (DSG)
          vom 19. Juni 1992;
          https://www.admin.ch/opc/de/classifed-compilation/19920153/index.html)
          gebunden, genau so wie auch Schweizer Unternehmen. Zusätzlich sind bei
          Schweizer Behörden noch kantonale Datenschutzgesetze und Vorschriften
          und das strafrechtliche Amtsgeheimnis zu beachten. Damit ist gemeint,
          dass sämtliche Organisationen besonders vorsichtig mit ihren Daten
          umgehen müssen.
        </li>
        <li className={s.DatenschutzItem}>
          Eine Firma, Verband oder Verein, auch eine Schule besitzt zahlreiche
          Personendaten wie z.B. Adressen, Geburtsdatum, Telefonnummern,
          Fotografien von Kunden, Mitarbeitern oder Mitgliedern. Der Schweizer
          Datenschutz schreibt klar vor, wie mit diesen Daten umgegangen werden
          darf und muss. Die Organisation, der die Daten anvertraut worden sind,
          trägt die Verantwortung für den datenschutzkonformen Umgang.
        </li>
        <li className={s.DatenschutzItem}>
          So muss sichergestellt werden, dass der Online Speicher- bzw. der
          Cloud Service- Anbieter als Dritter die Datensicherheit im Sinne von
          Art. 7 DSG und Art. 8ff. bzw. 20ff VDSG gewährleistet. Das heisst, die
          Personendaten müssen durch angemessene technische und organisatorische
          Massnahmen gegen unbefugtes Bearbeiten geschützt werden. Es muss für
          Vertraulichkeit, Verfügbarkeit und Integrität der Daten gesorgt sein.
        </li>
      </ul>
    </div>
  );
};

export default Datenschutz;
