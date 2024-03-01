import { TBreakpoint, TMediaQueries } from './types.ts'

const breakpoints: TBreakpoint = {
  Mobile: [0, 640],
  Tablet: [640, 1080],
  Laptop: [1080, 1280],
  Desktop: [1280, 1920],
  DesktopMax: [1920],
};

export const getMediaQueries = () => Object.keys(breakpoints).reduce(
  (previousValue: {[name: string]: string}, currentValue: string) => {
    const [minWidth, maxWidth] = breakpoints[currentValue]
    let fullMediaQuery = 'screen'

    if(minWidth) {
      fullMediaQuery = `${fullMediaQuery} and (min-width: ${minWidth}px)`

      if(maxWidth) {
        previousValue[`is${currentValue}AndUp`] = fullMediaQuery
      }
    }

    if(maxWidth) {
      const mediaQuery = `(max-width: ${maxWidth}px)`

      if (minWidth) {
        previousValue[`is${currentValue}AndDown`] = `screen and ${mediaQuery}`
      }

      fullMediaQuery = `${fullMediaQuery} and ${mediaQuery}`
    }

    previousValue[`is${currentValue}`] = fullMediaQuery
    return previousValue
  }, {})

export const media: TMediaQueries = getMediaQueries() as TMediaQueries