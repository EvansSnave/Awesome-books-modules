/* eslint-disable import/prefer-default-export */
import { DateTime } from './luxon.js';

export const currentDate = () => {
  const currentTime = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  const dateEl = document.querySelector('.dateTime');
  dateEl.textContent = currentTime;
};
