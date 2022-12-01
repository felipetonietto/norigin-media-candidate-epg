import React from "react";

import { useCurrentTime } from "../providers/CurrentTime";

function CurrentTime() {
  const currentTime = useCurrentTime();

  return (
    <div
      className="w-[1px] bg-yellow-400 absolute top-0 bottom-0 z-20"
      style={{ left: `${currentTime.offset}px` }}
      id="currentTime"
    >
      <div className="relative">
        <div className="w-1 rounded h-6 bg-yellow-400 absolute left-1/2 -translate-x-1/2" />
      </div>
    </div>
  );
}

export default CurrentTime;
