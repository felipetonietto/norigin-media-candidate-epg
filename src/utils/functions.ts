import { MINS_IN_AN_HOUR, SCALE } from "../constants/settings";

import { getHours, getMinutes } from "date-fns";

export function remCalc(px: any, base = 16) {
  let tempPx = px;
  if (typeof px === "string" || px instanceof String)
    tempPx = tempPx.replace("px", "");

  tempPx = parseInt(tempPx);
  return (1 / base) * tempPx;
}

export function getCurrentPosition() {
  return (
    getHours(new Date()) * MINS_IN_AN_HOUR + getMinutes(new Date()) * SCALE
  );
}

export function classNames(...classes: (string | boolean)[]) {
  return classes.filter(Boolean).join(" ");
}