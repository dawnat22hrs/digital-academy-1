import { useState, useEffect } from "react";
import {TMediaQueryKeys, TMediaState} from "./types.ts";
import {media} from "./media-queries.ts";

 export const useMedia = (): TMediaState => {
  const defaultState: TMediaState = {
    isMobile: false,
    isTablet: false,
    isTabletAndUp: false,
    isTabletAndDown: false,
    isLaptop: false,
    isLaptopAndUp: false,
    isLaptopAndDown: false,
    isDesktop: false,
    isDesktopAndDown: false,
    isDesktopAndUp: false,
    isDesktopMax: false
  }

  const [matches, setMatches] = useState(defaultState);

  useEffect(() => {
    const listener = () => {
      const newMatches = {...matches}

      for (const [key, val] of Object.entries(media)) {
        newMatches[key as TMediaQueryKeys] = window.matchMedia(val).matches
      }
      setMatches(newMatches)
    }

    listener()
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, []);

  return matches;
}