import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Table.module.css';

const Table = () => {
  return (
    <div className={s.Wrapper}>
      <div className={s.ColorBox}>
        <div className={s.BlueBox}>Privatanwender</div>
        <div className={s.GreenBox}>Vereine und Firmen</div>
      </div>
      <table className={s.Table}>
        <thead>
          <tr>
            <th></th>
            <th>Privat</th>
            <th>Familien</th>
            <th>Verein/Verband</th>
            <th>Unternehmen</th>
          </tr>
          <tr>
            <th></th>
            <th>
              <p>ab CHF 59</p>
              <p>pro Jahr</p>
              <div className={s.LinksBox}>
                <NavLink className={s.BuyButton} to="#">
                  KAUFEN
                </NavLink>
                <NavLink to="#">oder gratis testen</NavLink>
              </div>
            </th>
            <th>
              <p>ab CHF 5.50</p>
              <p>pro Benutzer</p>
              <div className={s.LinksBox}>
                <NavLink className={s.BuyButton} to="#">
                  KAUFEN
                </NavLink>
                <NavLink to="#">oder gratis testen</NavLink>
              </div>
            </th>
            <th>
              <p>ab CHF 5.50</p>
              <p>pro Benutzer</p>
              <div className={s.LinksBox}>
                <NavLink className={s.BuyButton} to="#">
                  KAUFEN
                </NavLink>
                <NavLink to="#">oder gratis testen</NavLink>
              </div>
            </th>
            <th>
              <p>ab CHF 11</p>
              <p>pro Benutzer</p>
              <div className={s.LinksBox}>
                <NavLink className={s.BuyButton} to="#">
                  KAUFEN
                </NavLink>
                <NavLink to="#">oder gratis testen</NavLink>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className={s.GrayRow}>
            <td>Verschlüsselte Speicherung aller Daten</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* ------------------------------------------------------ */}
          <tr>
            <td>Dateiverschlüsselung</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* ---------------------------------------------------- */}
          <tr className={s.GrayRow}>
            <td>End-zu-End Verschlüsselung</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr>
            <td>Verschlüsselter Datentransfer</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr className={s.GrayRow}>
            <td>Mehrere Geräte pro Benutzer</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr>
            <td>Client für Windows, Linux und Mac</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr className={s.GrayRow}>
            <td>iOS und Android</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr>
            <td>Daten öffentlich per Link teilen</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr className={s.GrayRow}>
            <td>Mehrere Benutzer möglich</td>
            <td>
              <span className={s.BlueCheck}></span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr>
            <td>Zentrale Verwaltungskonsole</td>
            <td>
              <span className={s.BlueCheck}></span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr className={s.GrayRow}>
            <td>Support per E-Mail</td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.BlueCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
            <td>
              <span className={s.GreenCheck}>&#10003;</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr>
            <td>Speicherplatz</td>
            <td>
              <span className={s.BlueText}>100GB / 500GB / 1TB</span>
            </td>
            <td>
              <span className={s.BlueText}>500GB pro Benutzer</span>
            </td>
            <td>
              <span className={s.GreenText}>500GB pro Benutzer</span>
            </td>
            <td>
              <span className={s.GreenText}>500GB pro Benutzer</span>
            </td>
          </tr>
          {/* -------------------------------------------------- */}
          <tr className={s.GrayRow}>
            <td>Anzahl Benutzer</td>
            <td>
              <span className={s.BlueText}>1</span>
            </td>
            <td>
              <span className={s.BlueText}>individuell</span>
            </td>
            <td>
              <span className={s.GreenText}>individuell</span>
            </td>
            <td>
              <span className={s.GreenText}>individuell</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
