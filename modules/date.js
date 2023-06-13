/* eslint-disable import/prefer-default-export */
import { DateTime } from '../node_modules/luxon/src/luxon.js';

export const currentDate = () => {
  const currentTime = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
  const dateEl = document.querySelector('.dateTime');
  dateEl.textContent = currentTime;
};
