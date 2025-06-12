"use client";
import { useContext, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { LoadingBarContext } from "./LoadingBarProvider";

export default function LoadingBarRouteListener() {
  const { complete } = useContext(LoadingBarContext);
  const pathname = usePathname();
  const prevPath = useRef(pathname);

  useEffect(() => {
    if (prevPath.current !== pathname) {
      complete();
      prevPath.current = pathname;
    }
  }, [pathname, complete]);

  return null;
}
