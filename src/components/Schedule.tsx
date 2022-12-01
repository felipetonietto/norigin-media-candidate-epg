import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import { Link } from "react-router-dom";

import { format, differenceInMinutes, isWithinInterval } from "date-fns";

import { CurrentTimeProvider } from "../providers/CurrentTime";

import TimeLine from "./TimeLine";

import { MINUTES_IN_A_DAY } from "../constants/settings";

import { classNames } from "../utils/functions";

import CurrentTime from "./CurrentTime";

type ScheduleProps = {
  channels: Channel[];
};

function Schedule(props: ScheduleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [totalSize, setTotalSize] = useState(0);

  useLayoutEffect(() => {
    const dimensions = document
      .getElementById("timeline")
      ?.getBoundingClientRect();
    if (dimensions) {
      setTotalSize(dimensions.width);
    }
  }, []);

  function moveToCurrentPosition() {
    const currentTimeElement = document.getElementById("currentTime");
    if (currentTimeElement) {
      currentTimeElement?.scrollIntoView({
        behavior: "smooth",
        inline: "center",
      });
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      moveToCurrentPosition();
    }, 100);
    return () => {
      clearInterval(timeout);
    };
  }, []);

  return (
    <div
      className="flex flex-nowrap flex-col overflow-x-auto mt-4 items-baseline"
      id="schedule"
    >
      <div className="relative" ref={ref}>
        <CurrentTimeProvider>
          <TimeLine />
          <CurrentTime />
        </CurrentTimeProvider>

        {props.channels?.map((channel) => {
          return (
            <div
              key={channel.id}
              className="flex flex-row h-16 drop-shadow-2xl"
            >
              <div className=" bg-gray-600 rounded sticky left-0">
                <img src={channel?.images?.logo} width="50"></img>
              </div>
              <div className="flex flex-nowrap flex-row justify-center">
                {channel.schedules.map((schedule: Schedule) => {
                  const durationInMinutes = differenceInMinutes(
                    new Date(schedule.end),
                    new Date(schedule.start)
                  );

                  const width =
                    (totalSize * durationInMinutes) / MINUTES_IN_A_DAY;

                  const isLive = isWithinInterval(new Date(), {
                    start: new Date(schedule.start),
                    end: new Date(schedule.end),
                  });

                  return (
                    <Link to={schedule.id} key={schedule.start}>
                      <div
                        className={classNames(
                          isLive
                            ? "bg-gray-600 border-gray-500 hover:bg-gray-500"
                            : "bg-gray-800",
                          "text-xs h-full border border-gray-600 hover:bg-gray-700 border-solid rounded-md py-3"
                        )}
                        // className="text-xs h-full border-2 border-gray-600 bg-gray-900 hover:bg-gray-800 border-solid rounded-md"
                        style={{ width: `${width}px` }}
                      >
                        <div className=" overflow-hidden flex-col min-w-max">
                          <div> {schedule.title}</div>
                          <div className="flex flex-1 flex-row">
                            <span>
                              {`${format(
                                new Date(schedule.start),
                                "HH:mm"
                              )} - ${format(new Date(schedule.end), "HH:mm")}`}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <button
        onClick={() => {
          moveToCurrentPosition();
        }}
      >
        <div className="px-6 py-4 block absolute right-[20px] bottom-[50px] leading-none bg-orange-600 rounded-md z-20">
          NOW
        </div>
      </button>
    </div>
  );
}

export default Schedule;
