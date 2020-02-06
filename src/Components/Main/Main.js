import React from 'react';
import s from './Main.module.css';
import CarouselSlider from '../Carousel/CarouselSlider';
import Produkte from '../Produkte/Produkte';

const Main = () => {
  return (
    <div className={s.main}>
      <CarouselSlider />
      <h1 className={s.MainDescription}>
        SpeicherBox.ch ist ein sicherer und klar strukturierter Arbeitsraum, in
        dem Sie sich auf das konzentrieren können, worauf es ankommt. Bei uns
        steht die Sicherheit Ihrer Daten an erster Stelle. Das ist Schweizer
        Qualität!
      </h1>
      <Produkte />
    </div>
  );
};

export default Main;
