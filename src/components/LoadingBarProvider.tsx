"use client";
import { createContext, useRef } from "react";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";
import LoadingBarRouteListener from "@/components/LoadingBarRouteListener";

export const LoadingBarContext = createContext<{ start: () => void; complete: () => void }>({ start: () => {}, complete: () => {} });

export default function LoadingBarProvider({ children }: { children: React.ReactNode }) {
  const loadingBarRef = useRef<LoadingBarRef>(null);

  const start = () => loadingBarRef.current?.continuousStart();
  const complete = () => loadingBarRef.current?.complete();

  return (
    <LoadingBarContext.Provider value={{ start, complete }}>
      {/* Global Loading Bar above Navbar */}
      <LoadingBar color="#6366f1" ref={loadingBarRef} height={3} shadow={true} />
      <LoadingBarRouteListener />
      {children}
    </LoadingBarContext.Provider>
  );
}
