export  type TBreakpoint = {
  [name: string]: number[]
};

export type TMediaQueryKeys = 'isMobile' | 'isTablet' | 'isTabletAndUp' | 'isTabletAndDown' | 'isLaptop' | 'isLaptopAndUp' | 'isLaptopAndDown' | 'isDesktop' | 'isDesktopAndUp' | 'isDesktopAndDown' | 'isDesktopMax'

export type TMediaQueries = Record<TMediaQueryKeys, string>

export type TMediaState = Record<TMediaQueryKeys, boolean>