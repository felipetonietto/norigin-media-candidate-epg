import React, { createContext, useContext, useState } from "react";

interface Context {
  offset: number;
  setOffset: (offset: number) => void;
}

const currentTimeContext = createContext<Context | null>(null);

export function CurrentTimeProvider(props: { children: React.ReactNode }) {
  const [offset, setOffset] = useState(0);

  return (
    <currentTimeContext.Provider value={{ offset, setOffset }}>
      {props.children}
    </currentTimeContext.Provider>
  );
}

export function useCurrentTime() {
  const currentTime = useContext(currentTimeContext);
  if (!currentTime) {
    throw new Error("useCurrentTime must be used within a CurrentTimeProvider");
  }
  return currentTime;
}
