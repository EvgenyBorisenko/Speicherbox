import React from 'react';
import s from './ProduktUbersicht.module.css';
import Table from '../Table/Table';

const ProduktUbersicht = () => {
  return (
    <div className={s.Wrapper}>
      <h1 className={s.Tittle}>Produktübersicht</h1>
      <div className={s.ProduktübersichtText}>
        <p>
          Verschaffen Sie sich den Überblick und entscheiden sich für eine
          unserer Rundum-Sorglos-Pakete. Sie können sich immer darauf verlassen:
          100 % Privatsphäre durch End-zu-Endverschlüsselung und externe
          Datensicherung ausschliesslich in der Schweiz!
        </p>
      </div>
      <Table />
    </div>
  );
};

export default ProduktUbersicht;
