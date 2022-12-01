import React, { useCallback, useEffect, useRef, useState } from "react";

import { getHours, getMinutes } from "date-fns";

import {
  HOURS_IN_A_DAY,
  SCALE,
  MINS_IN_AN_HOUR,
  MINUTES_IN_A_DAY,
} from "../constants/settings";

import { useCurrentTime } from "../providers/CurrentTime";

function TimeLine() {
  const [margin, setMargin] = useState(0);
  const currentTime = useCurrentTime();
  const ref = useRef<HTMLDivElement>(null);

  const calculateOffset = useCallback(() => {
    const dimensions = ref.current?.getBoundingClientRect();
    if (dimensions) {
      const left = margin || dimensions.left;
      if (!margin) {
        setMargin(left);
      }
      const now = new Date();
      currentTime.setOffset(
        ((dimensions.width + left) *
          (getHours(now) * MINS_IN_AN_HOUR + getMinutes(now))) /
          MINUTES_IN_A_DAY +
          10
      );
    }
  }, [margin, currentTime]);

  useEffect(() => {
    calculateOffset();
    const interval = setInterval(() => {
      calculateOffset();
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [calculateOffset]);

  const hours = new Array(HOURS_IN_A_DAY)
    .fill(null)
    .map((item, index) => index);
  const width = MINS_IN_AN_HOUR * SCALE;
  const cellStyles = { width };

  const hoursElements = hours.map((item) => {
    const hours = JSON.stringify(getHours(new Date()));

    return (
      <span
        className="h-full text-sm width-[300px] leading-6 border inline-block border-gray-900 bg-gray-600 border-solid rounded-md px-[130px]"
        style={cellStyles}
        key={item}
        id={hours}
      >
        {item}:00
      </span>
    );
  });

  return (
    <div
      className="relative h-6 ml-[50px] whitespace-nowrap"
      ref={ref}
      id="timeline"
    >
      {hoursElements}
    </div>
  );
}

export default TimeLine;
