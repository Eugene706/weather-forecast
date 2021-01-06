import thunderstorms from '../assets/img/thunderstroms.svg';
import thunderstromsHeavyRain from '../assets/img/thunderstroms-heavy-rain.svg';

import drizzle from '../assets/img/drizzle.svg';

import lightRain from '../assets/img/light-rain.svg';
import freezingRain from '../assets/img/freezing-rain.svg';
import extremeRain from '../assets/img/extreme-rain.svg';

import rainSnow from '../assets/img/rain-snow.svg';
import snow from '../assets/img/snow.svg';
import HeavySnow from '../assets/img/heavy-snow.svg';

import foggy from '../assets/img/foggy.svg';
import squalls from '../assets/img/squalls.svg';
import tornado from '../assets/img/tornado.svg';

import clearSky from '../assets/img/clear-sky.svg';
import fewClouds from '../assets/img/few-clouds.svg';
import partlyCloudy from '../assets/img/partly-cloudy.svg';
import cloudy from '../assets/img/cloudy.svg';
import mostlyCloudy from '../assets/img/mostly-cloudy.svg';

export const kindOfWeather = (id) => {
  if (id >= 200 && id <= 211) {
    return thunderstorms;
  }

  if (id >= 212 && id <= 232) {
    return thunderstromsHeavyRain;
  }

  if (id >= 300 && id <= 321) {
    return drizzle;
  }

  if (id >= 500 && id <= 501) {
    return lightRain;
  }

  if (id === 511) {
    return freezingRain;
  }

  if (id >= 502 && id <= 504) {
    return extremeRain;
  }

  if (id >= 520 && id <= 531) {
    return extremeRain;
  }

  if (id >= 611 && id <= 622) {
    return rainSnow;
  }

  if (id >= 600 && id <= 601) {
    return snow;
  }

  if (id === 602) {
    return HeavySnow;
  }

  if (id >= 701 && id <= 762) {
    return foggy;
  }

  if (id === 771) {
    return squalls;
  }

  if (id === 781) {
    return tornado;
  }

  if (id === 800) {
    return clearSky;
  }

  if (id === 801) {
    return fewClouds;
  }

  if (id === 802) {
    return partlyCloudy;
  }

  if (id === 803) {
    return cloudy;
  }

  if (id === 804) {
    return mostlyCloudy;
  }
};

export default kindOfWeather;
