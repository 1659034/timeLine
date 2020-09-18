import { createDate } from "./_utils";

export const appointmentColors = {
  available: { color: "green", fill: false },
  expedited: { color: "red", fill: true },
  booked: { color: "grey", fill: true }
};

// X-Axis
const STORE_OPEN = 7;
const STORE_CLOSE = 21;
const STORE_MINUTES_MAX = (STORE_CLOSE - STORE_OPEN) * 60;

const APP_DATE = createDate("2019-10-04T00:00:00");
const OPEN = new Date(APP_DATE);
const CLOSE = new Date(APP_DATE);

OPEN.setHours(STORE_OPEN);
CLOSE.setHours(STORE_CLOSE);

// Y-Axis
const TIMELINE_ROWS_MAX = 7;

// Exported Constants
export const X_DOMAIN = [OPEN, CLOSE];
export const X_RANGE = [0, STORE_MINUTES_MAX];

export const Y_DOMAIN = [0, TIMELINE_ROWS_MAX];
export const Y_RANGE = [0, 200];
